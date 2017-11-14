package com.jialu.minios.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;

import com.jialu.sawa.utility.MiniModel;
import lombok.Data;
import lombok.EqualsAndHashCode;


/**
 * @author sawa
 * 商号
 */
@Entity
@Table(name = "mst_corporation")
@Data
@EqualsAndHashCode(callSuper = true)
public class MstCorporationModel extends MiniModel{

	private static final long serialVersionUID = 1L;
	
    /**
	 * 商号番号
	 */
	@Column(unique = true, nullable = false)
	private java.lang.String corporateNumber;
		
    /**
	 * 商号名
	 */
	@Column(unique = false, nullable = false)
	private java.lang.String name;
		
    /**
	 * 住所
	 */
	@Column(unique = false, nullable = true)
	private java.lang.String address;
		
    /**
	 * 緯度
	 */
	@Column(unique = false, nullable = true)
	private java.lang.String lat;
		
    /**
	 * 経度
	 */
	@Column(unique = false, nullable = true)
	private java.lang.String lng;
		
}
