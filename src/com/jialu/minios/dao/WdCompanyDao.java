package com.jialu.minios.dao;

import org.hibernate.SessionFactory;

import com.jialu.minios.model.WdCompanyModel;
import com.jialu.sawa.utility.MiniDao;

/**
 * @author sawa
 * 会社
 */
public class WdCompanyDao extends MiniDao<WdCompanyModel> {

	public WdCompanyDao(SessionFactory factory) {
		super(factory);
	}
}
