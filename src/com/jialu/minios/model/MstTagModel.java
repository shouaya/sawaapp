package com.jialu.minios.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;

import com.jialu.sawa.utility.MiniModel;
import lombok.Data;
import lombok.EqualsAndHashCode;


/**
 * @author sawa
 * tag
 */
@Entity
@Table(name = "mst_tag")
@Data
@EqualsAndHashCode(callSuper = true)
public class MstTagModel extends MiniModel{

	private static final long serialVersionUID = 1L;
	
    /**
	 * tag关键字
	 */
	@Column(unique = true, nullable = false)
	private java.lang.String name;
		
    /**
	 * 説明
	 */
	@Column(unique = false, nullable = true)
	private java.lang.String description;
		
}
