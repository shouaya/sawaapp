package com.jialu.minios.model;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Column;

import com.jialu.sawa.utility.MiniModel;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.OneToOne;
import javax.persistence.JoinColumn;

/**
 * @author sawa
 * 顧客
 */
@Entity
@Table(name = "wd_customer")
@Data
@EqualsAndHashCode(callSuper = true)
public class WdCustomerModel extends MiniModel{

	private static final long serialVersionUID = 1L;
	
    /**
	 * ユーザーＩＤ
	 */
	@Column(unique = false, nullable = false)
	private java.lang.Integer user_id;
		
    /**
	 * 姓
	 */
	@Column(unique = false, nullable = false)
	private java.lang.String sei;
		
    /**
	 * 名
	 */
	@Column(unique = false, nullable = false)
	private java.lang.String mei;
		
    /**
	 * 会社名
	 */
	@Column(unique = false, nullable = false)
	private java.lang.String company;
		
    /**
	 * メールアドレス
	 */
	@Column(unique = false, nullable = false)
	private java.lang.String mail;
		
    /**
	 * 電話番号
	 */
	@Column(unique = true, nullable = false)
	private java.lang.String phone;
		
    /**
	 * ユーザー情報
	 */
	@OneToOne
	@JoinColumn(name="user_id", nullable=true, insertable = false, updatable = false)
	private com.jialu.sawa.base.model.MiniUserModel user;
		
}
