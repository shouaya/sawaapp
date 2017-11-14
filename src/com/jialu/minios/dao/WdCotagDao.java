package com.jialu.minios.dao;

import org.hibernate.SessionFactory;

import com.jialu.minios.model.WdCotagModel;
import com.jialu.sawa.utility.MiniDao;

/**
 * @author sawa
 * 会社tag
 */
public class WdCotagDao extends MiniDao<WdCotagModel> {

	public WdCotagDao(SessionFactory factory) {
		super(factory);
	}
}
