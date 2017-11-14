package com.jialu.minios.dao;

import org.hibernate.SessionFactory;

import com.jialu.minios.model.WdCustomerModel;
import com.jialu.sawa.utility.MiniDao;

/**
 * @author sawa
 * 顧客
 */
public class WdCustomerDao extends MiniDao<WdCustomerModel> {

	public WdCustomerDao(SessionFactory factory) {
		super(factory);
	}
}
