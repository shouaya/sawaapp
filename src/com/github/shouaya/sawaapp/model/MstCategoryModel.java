package com.github.shouaya.sawaapp.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;

import com.jialu.sawa.utility.MiniModel;
import lombok.Data;
import lombok.EqualsAndHashCode;


/**
 * @author sawa
 * 業界分類
 */
@Entity
@Table(name = "mst_category")
@Data
@EqualsAndHashCode(callSuper = true)
public class MstCategoryModel extends MiniModel{

	private static final long serialVersionUID = 1L;
	
    /**
	 * 業界コード
	 */
	@Column(unique = false, nullable = false)
	private java.lang.String code;
		
    /**
	 * 業界名
	 */
	@Column(unique = false, nullable = false)
	private java.lang.String name;
		
    /**
	 * 説明
	 */
	@Column(unique = false, nullable = false)
	private java.lang.String description;
		
}
