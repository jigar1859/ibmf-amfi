package com.ibmf.jigarthakkar.amfi.dto;

/**
 * @author jigarthakkar
 *
 */
public class FundSchemeDTO {

	private String fundName;
	private String schemeName;

	public FundSchemeDTO() {
	}

	/**
	 * @param fundName
	 * @param schemeName
	 */
	public FundSchemeDTO(String fundName, String schemeName) {
		super();
		this.fundName = fundName;
		this.schemeName = schemeName;
	}

	/**
	 * @return the fundName
	 */
	public String getFundName() {
		return fundName;
	}

	/**
	 * @param fundName
	 *            the fundName to set
	 */
	public void setFundName(String fundName) {
		this.fundName = fundName;
	}

	/**
	 * @return the schemeName
	 */
	public String getSchemeName() {
		return schemeName;
	}

	/**
	 * @param schemeName
	 *            the schemeName to set
	 */
	public void setSchemeName(String schemeName) {
		this.schemeName = schemeName;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#hashCode()
	 */
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((fundName == null) ? 0 : fundName.hashCode());
		result = prime * result + ((schemeName == null) ? 0 : schemeName.hashCode());
		return result;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#equals(java.lang.Object)
	 */
	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null) {
			return false;
		}
		if (!(obj instanceof FundSchemeDTO)) {
			return false;
		}
		FundSchemeDTO other = (FundSchemeDTO) obj;
		if (fundName == null) {
			if (other.fundName != null) {
				return false;
			}
		} else if (!fundName.equals(other.fundName)) {
			return false;
		}
		if (schemeName == null) {
			if (other.schemeName != null) {
				return false;
			}
		} else if (!schemeName.equals(other.schemeName)) {
			return false;
		}
		return true;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "FundSchemeDTO [fundName=" + fundName + ", schemeName=" + schemeName + "]";
	}

}
