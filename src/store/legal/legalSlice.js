import { createSlice } from '@reduxjs/toolkit';
import {
  fetchTermsConditions,
  publishTermsConditions,
  toggleTermsStatus,
  restoreTermsVersion,
  fetchPrivacyPolicies,
  publishPrivacyPolicy,
  togglePrivacyStatus,
  restorePrivacyVersion,
} from './legalThunk';

const initialState = {
  terms: {
    customer: { active: null, history: [] },
    driver: { active: null, history: [] },
    loading: false,
    publishing: false,
    error: null,
  },
  privacy: {
    customer: { active: null, history: [] },
    driver: { active: null, history: [] },
    loading: false,
    publishing: false,
    error: null,
  },
};

const legalSlice = createSlice({
  name: 'legal',
  initialState,
  reducers: {
    clearLegalError: (state) => {
      state.terms.error = null;
      state.privacy.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // FETCH TERMS
      .addCase(fetchTermsConditions.pending, (state) => {
        state.terms.loading = true;
        state.terms.error = null;
      })
      .addCase(fetchTermsConditions.fulfilled, (state, action) => {
        state.terms.loading = false;
        const { type, data } = action.payload;
        if (data && state.terms[type]) {
          state.terms[type].active = data.active;
          state.terms[type].history = data.history || [];
        }
      })
      .addCase(fetchTermsConditions.rejected, (state, action) => {
        state.terms.loading = false;
        state.terms.error = action.payload?.message || 'Failed to load terms';
      })
      // PUBLISH TERMS
      .addCase(publishTermsConditions.pending, (state) => {
        state.terms.publishing = true;
      })
      .addCase(publishTermsConditions.fulfilled, (state, action) => {
        state.terms.publishing = false;
        const { type, data } = action.payload;
        if (data && state.terms[type]) {
          state.terms[type].active = data;
          state.terms[type].history = [data, ...state.terms[type].history.map(h => ({ ...h, isActive: false, status: 'Archived' }))];
        }
      })
      .addCase(publishTermsConditions.rejected, (state, action) => {
        state.terms.publishing = false;
        state.terms.error = action.payload?.message || 'Failed to publish terms';
      })

      // FETCH PRIVACY
      .addCase(fetchPrivacyPolicies.pending, (state) => {
        state.privacy.loading = true;
        state.privacy.error = null;
      })
      .addCase(fetchPrivacyPolicies.fulfilled, (state, action) => {
        state.privacy.loading = false;
        const { type, data } = action.payload;
        if (data && state.privacy[type]) {
          state.privacy[type].active = data.active;
          state.privacy[type].history = data.history || [];
        }
      })
      .addCase(fetchPrivacyPolicies.rejected, (state, action) => {
        state.privacy.loading = false;
        state.privacy.error = action.payload?.message || 'Failed to load privacy policy';
      })
      // PUBLISH PRIVACY
      .addCase(publishPrivacyPolicy.pending, (state) => {
        state.privacy.publishing = true;
      })
      .addCase(publishPrivacyPolicy.fulfilled, (state, action) => {
        state.privacy.publishing = false;
        const { type, data } = action.payload;
        if (data && state.privacy[type]) {
          state.privacy[type].active = data;
          state.privacy[type].history = [data, ...state.privacy[type].history.map(h => ({ ...h, isActive: false, status: 'Archived' }))];
        }
      })
      .addCase(publishPrivacyPolicy.rejected, (state, action) => {
        state.privacy.publishing = false;
        state.privacy.error = action.payload?.message || 'Failed to publish privacy policy';
      });
  },
});

export const { clearLegalError } = legalSlice.actions;
export default legalSlice.reducer;
