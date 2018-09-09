/**
 * 
 */
package com.ibmf.jigarthakkar.amfi.dto;

/**
 * @author jigarthakkar
 *
 */
public class SchemeNAVDTO {

	private int id;
	private String schemeName;
	private String schemeNAV;
	private String schemeDate;

	public SchemeNAVDTO() {
		// TODO Auto-generated constructor stub
	}

	public SchemeNAVDTO(int id, String schemeName, String schemeNAV, String schemeDate) {
		super();
		this.id = id;
		this.schemeName = schemeName;
		this.schemeNAV = schemeNAV;
		this.schemeDate = schemeDate;
	}

	/**
	 * @return the id
	 */
	public int getId() {
		return id;
	}

	/**
	 * @param id
	 *            the id to set
	 */
	public void setId(int id) {
		this.id = id;
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

	/**
	 * @return the schemeNAV
	 */
	public String getSchemeNAV() {
		return schemeNAV;
	}

	/**
	 * @param schemeNAV
	 *            the schemeNAV to set
	 */
	public void setSchemeNAV(String schemeNAV) {
		this.schemeNAV = schemeNAV;
	}

	/**
	 * @return the schemeDate
	 */
	public String getSchemeDate() {
		return schemeDate;
	}

	/**
	 * @param schemeDate
	 *            the schemeDate to set
	 */
	public void setSchemeDate(String schemeDate) {
		this.schemeDate = schemeDate;
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
		result = prime * result + id;
		result = prime * result + ((schemeDate == null) ? 0 : schemeDate.hashCode());
		result = prime * result + ((schemeNAV == null) ? 0 : schemeNAV.hashCode());
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
		if (!(obj instanceof SchemeNAVDTO)) {
			return false;
		}
		SchemeNAVDTO other = (SchemeNAVDTO) obj;
		if (id != other.id) {
			return false;
		}
		if (schemeDate == null) {
			if (other.schemeDate != null) {
				return false;
			}
		} else if (!schemeDate.equals(other.schemeDate)) {
			return false;
		}
		if (schemeNAV == null) {
			if (other.schemeNAV != null) {
				return false;
			}
		} else if (!schemeNAV.equals(other.schemeNAV)) {
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
		return "SchemeNAVDTO [id=" + id + ", schemeName=" + schemeName + ", schemeNAV=" + schemeNAV + ", schemeDate="
				+ schemeDate + "]";
	}

}
