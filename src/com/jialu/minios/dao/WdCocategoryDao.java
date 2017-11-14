package com.jialu.minios.dao;

import org.hibernate.SessionFactory;

import com.jialu.minios.model.WdCocategoryModel;
import com.jialu.sawa.utility.MiniDao;

/**
 * @author sawa
 * 会社業種
 */
public class WdCocategoryDao extends MiniDao<WdCocategoryModel> {

	public WdCocategoryDao(SessionFactory factory) {
		super(factory);
	}
}
