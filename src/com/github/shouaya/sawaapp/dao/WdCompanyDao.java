package com.github.shouaya.sawaapp.dao;

import org.hibernate.SessionFactory;

import com.github.shouaya.sawaapp.model.WdCompanyModel;
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
