const COMPLETE_KYC_MESSAGE =
  "Please complete your investor KYC before making offers or buying shares in the marketplace.";

export function marketplaceErrorMessage(error, fallbackKey = "marketplaceActionFailed") {
  if (
    error?.code === "marketplace_kyc_required" ||
    error?.message === COMPLETE_KYC_MESSAGE
  ) {
    return { key: "completeKycAction" };
  }

  return error?.message || { key: fallbackKey };
}
