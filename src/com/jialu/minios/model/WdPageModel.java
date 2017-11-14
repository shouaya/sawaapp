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

/**
 * @author sawa
 * 会社ページ
 */
@Entity
@Table(name = "wd_page")
@Data
@EqualsAndHashCode(callSuper = true)
public class WdPageModel extends MiniModel{

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
	 * ページタイトル
	 */
	@Column(unique = false, nullable = false)
	private java.lang.String title;
		
    /**
	 * ページURL
	 */
	@Column(unique = false, nullable = false)
	private java.lang.String url;
		
    /**
	 * 関連会社
	 */
	@ManyToOne
	@JsonBackReference("company")
	@JoinColumn(name="company_id", nullable=true, insertable = false, updatable = false)
	private WdCompanyModel company;
		
}
