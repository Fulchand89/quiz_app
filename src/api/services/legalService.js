import { mockTermsConditions, mockPrivacyPolicies, mockSupportContact } from "../mockData";

class LegalService {
  // Terms & Conditions APIs
  async getTermsConditions(type = "customer") {
    return {
      success: true,
      message: "Terms fetched successfully",
      data: {
        active: mockTermsConditions[type]?.active || null,
        history: mockTermsConditions[type]?.history || []
      }
    };
  }

  async publishTermsConditions({ type, content }) {
    const history = mockTermsConditions[type]?.history || [];
    const nextId = history.length > 0 ? Math.max(...history.map(h => h.id)) + 1 : 1;
    const version = `v1.0.${nextId}`;
    
    // Archive previous versions
    history.forEach(h => {
      h.isActive = false;
      h.status = 'Archived';
    });

    const newTerms = {
      id: nextId,
      version,
      content,
      isActive: true,
      status: 'Active',
      publishedAt: new Date().toISOString(),
      publishedBy: 'System Admin'
    };

    history.unshift(newTerms);
    mockTermsConditions[type] = {
      active: newTerms,
      history
    };

    return {
      success: true,
      message: "Terms published successfully",
      data: newTerms
    };
  }

  async toggleTermsStatus(id) {
    const numericId = parseInt(id, 10);
    // Search across customer and driver terms
    for (const type of ['customer', 'driver']) {
      const history = mockTermsConditions[type]?.history || [];
      const item = history.find(h => h.id === numericId);
      if (item) {
        item.isActive = !item.isActive;
        item.status = item.isActive ? 'Active' : 'Draft';
        
        // If activated, make sure it becomes the active version and others are deactivated
        if (item.isActive) {
          history.forEach(h => {
            if (h.id !== numericId) {
              h.isActive = false;
              h.status = 'Archived';
            }
          });
          mockTermsConditions[type].active = item;
        } else {
          // If deactivated and was active, set active to null
          if (mockTermsConditions[type].active?.id === numericId) {
            mockTermsConditions[type].active = null;
          }
        }

        return {
          success: true,
          message: "Terms status toggled successfully",
          data: {
            active: mockTermsConditions[type].active,
            history
          }
        };
      }
    }

    throw { response: { status: 404, data: { message: "Version not found" } } };
  }

  async restoreTermsVersion(id) {
    const numericId = parseInt(id, 10);
    for (const type of ['customer', 'driver']) {
      const history = mockTermsConditions[type]?.history || [];
      const item = history.find(h => h.id === numericId);
      if (item) {
        // Deactivate current active
        history.forEach(h => {
          h.isActive = false;
          h.status = 'Archived';
        });

        // Set restored item as active
        item.isActive = true;
        item.status = 'Active';
        mockTermsConditions[type].active = item;

        return {
          success: true,
          message: "Version restored successfully",
          data: {
            active: item,
            history
          }
        };
      }
    }
    throw { response: { status: 404, data: { message: "Version not found" } } };
  }

  // Privacy Policy APIs
  async getPrivacyPolicies(type = "customer") {
    return {
      success: true,
      message: "Privacy policies fetched successfully",
      data: {
        active: mockPrivacyPolicies[type]?.active || null,
        history: mockPrivacyPolicies[type]?.history || []
      }
    };
  }

  async publishPrivacyPolicy({ type, content }) {
    const history = mockPrivacyPolicies[type]?.history || [];
    const nextId = history.length > 0 ? Math.max(...history.map(h => h.id)) + 1 : 1;
    const version = `v1.0.${nextId}`;
    
    // Archive previous versions
    history.forEach(h => {
      h.isActive = false;
      h.status = 'Archived';
    });

    const newPolicy = {
      id: nextId,
      version,
      content,
      isActive: true,
      status: 'Active',
      publishedAt: new Date().toISOString(),
      publishedBy: 'System Admin'
    };

    history.unshift(newPolicy);
    mockPrivacyPolicies[type] = {
      active: newPolicy,
      history
    };

    return {
      success: true,
      message: "Privacy policy published successfully",
      data: newPolicy
    };
  }

  async togglePrivacyStatus(id) {
    const numericId = parseInt(id, 10);
    for (const type of ['customer', 'driver']) {
      const history = mockPrivacyPolicies[type]?.history || [];
      const item = history.find(h => h.id === numericId);
      if (item) {
        item.isActive = !item.isActive;
        item.status = item.isActive ? 'Active' : 'Draft';
        
        if (item.isActive) {
          history.forEach(h => {
            if (h.id !== numericId) {
              h.isActive = false;
              h.status = 'Archived';
            }
          });
          mockPrivacyPolicies[type].active = item;
        } else {
          if (mockPrivacyPolicies[type].active?.id === numericId) {
            mockPrivacyPolicies[type].active = null;
          }
        }

        return {
          success: true,
          message: "Privacy policy status toggled successfully",
          data: {
            active: mockPrivacyPolicies[type].active,
            history
          }
        };
      }
    }
    throw { response: { status: 404, data: { message: "Version not found" } } };
  }

  async restorePrivacyVersion(id) {
    const numericId = parseInt(id, 10);
    for (const type of ['customer', 'driver']) {
      const history = mockPrivacyPolicies[type]?.history || [];
      const item = history.find(h => h.id === numericId);
      if (item) {
        history.forEach(h => {
          h.isActive = false;
          h.status = 'Archived';
        });

        item.isActive = true;
        item.status = 'Active';
        mockPrivacyPolicies[type].active = item;

        return {
          success: true,
          message: "Version restored successfully",
          data: {
            active: item,
            history
          }
        };
      }
    }
    throw { response: { status: 404, data: { message: "Version not found" } } };
  }

  // Support Contact APIs
  async getSupportContact() {
    return {
      success: true,
      message: "Support contact details fetched successfully",
      data: mockSupportContact
    };
  }

  async updateSupportContact(data) {
    mockSupportContact.supportEmail = data.supportEmail || mockSupportContact.supportEmail;
    mockSupportContact.helplineNumber = data.helplineNumber || mockSupportContact.helplineNumber;
    mockSupportContact.officeAddress = data.officeAddress || mockSupportContact.officeAddress;
    mockSupportContact.workingHours = data.workingHours || mockSupportContact.workingHours;
    mockSupportContact.updatedAt = new Date().toISOString();

    return {
      success: true,
      message: "Support contact details updated successfully",
      data: mockSupportContact
    };
  }
}

export default new LegalService();
