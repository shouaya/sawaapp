package com.jialu.minios.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;

import com.jialu.sawa.utility.MiniModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.OneToMany;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.Where;
import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;

/**
 * @author sawa
 * 会社
 */
@Entity
@Table(name = "wd_company")
@Data
@EqualsAndHashCode(callSuper = true)
public class WdCompanyModel extends MiniModel{

	private static final long serialVersionUID = 1L;
	
    /**
	 * 商号ＩＤ
	 */
	@Column(unique = false, nullable = true)
	private java.lang.Integer corporation_id;
		
    /**
	 * 会社名
	 */
	@Column(unique = false, nullable = false)
	private java.lang.String name;
		
    /**
	 * ロマ字
	 */
	@Column(unique = false, nullable = true)
	private java.lang.String roma;
		
    /**
	 * 設立年月日
	 */
	@Column(unique = false, nullable = true)
	private java.lang.String buildDate;
		
    /**
	 * 資本金
	 */
	@Column(unique = false, nullable = true)
	private java.lang.String capital;
		
    /**
	 * 業務
	 */
	@Column(unique = false, nullable = true)
	private java.lang.String business;
		
    /**
	 * 関連業種
	 */
	@OneToMany(mappedBy = "company")
	@JsonManagedReference("company")
	@Where(clause = "deleted = 0")
	private java.util.List<WdCocategoryModel> cocategory;
		
    /**
	 * 関連ページ
	 */
	@OneToMany(mappedBy = "company")
	@JsonManagedReference("company")
	@Where(clause = "deleted = 0")
	private java.util.List<WdPageModel> page;
		
    /**
	 * 商号情報
	 */
	@OneToOne
	@JoinColumn(name="corporation_id", nullable=true, insertable = false, updatable = false)
	private MstCorporationModel corporation;
		
}
