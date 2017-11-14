package com.jialu.minios.dao;

import org.hibernate.SessionFactory;

import com.jialu.minios.model.WdPageModel;
import com.jialu.sawa.utility.MiniDao;

/**
 * @author sawa
 * 会社ページ
 */
public class WdPageDao extends MiniDao<WdPageModel> {

	public WdPageDao(SessionFactory factory) {
		super(factory);
	}
}
