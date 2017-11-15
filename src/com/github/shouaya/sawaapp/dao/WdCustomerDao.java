package com.github.shouaya.sawaapp.dao;

import org.hibernate.SessionFactory;

import com.github.shouaya.sawaapp.model.WdCustomerModel;
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
