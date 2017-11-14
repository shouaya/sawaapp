package com.jialu.minios.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;

import com.jialu.sawa.utility.MiniModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.ManyToOne;
import com.fasterxml.jackson.annotation.JsonBackReference;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

/**
 * @author sawa
 * 会社業種
 */
@Entity
@Table(name = "wd_cocategory")
@Data
@EqualsAndHashCode(callSuper = true)
public class WdCocategoryModel extends MiniModel{

	private static final long serialVersionUID = 1L;
	
    /**
	 * 会社ＩＤ
	 */
	@Column(unique = false, nullable = false)
	private java.lang.Integer company_id;
		
    /**
	 * 優先
	 */
	@Column(unique = false, nullable = false)
	private java.lang.Integer priority;
		
    /**
	 * 分類ＩＤ
	 */
	@Column(unique = false, nullable = true)
	private java.lang.Integer category_id;
		
    /**
	 * 関連会社
	 */
	@ManyToOne
	@JsonBackReference("company")
	@JoinColumn(name="company_id", nullable=true, insertable = false, updatable = false)
	private WdCompanyModel company;
		
    /**
	 * 関連業界分類
	 */
	@OneToOne
	@JoinColumn(name="category_id", nullable=true, insertable = false, updatable = false)
	private MstCategoryModel category;
		
}
