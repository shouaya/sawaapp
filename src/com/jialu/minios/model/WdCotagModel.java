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
 * 会社tag
 */
@Entity
@Table(name = "wd_cotag")
@Data
@EqualsAndHashCode(callSuper = true)
public class WdCotagModel extends MiniModel{

	private static final long serialVersionUID = 1L;
	
    /**
	 * 会社ＩＤ
	 */
	@Column(unique = false, nullable = false)
	private java.lang.Integer company_id;
		
    /**
	 * tagＩＤ
	 */
	@Column(unique = false, nullable = false)
	private java.lang.Integer tag_id;
		
    /**
	 * 点数
	 */
	@Column(unique = false, nullable = false)
	private java.lang.Integer point;
		
    /**
	 * 関連会社
	 */
	@ManyToOne
	@JsonBackReference("company")
	@JoinColumn(name="company_id", nullable=true, insertable = false, updatable = false)
	private WdCompanyModel company;
		
    /**
	 * 関連tag
	 */
	@OneToOne
	@JoinColumn(name="tag_id", nullable=true, insertable = false, updatable = false)
	private MstTagModel tag;
		
}
