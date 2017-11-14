package com.jialu.minios.dao;

import org.hibernate.SessionFactory;

import com.jialu.minios.model.MstCategoryModel;
import com.jialu.sawa.utility.MiniDao;

/**
 * @author sawa
 * 業界分類
 */
public class MstCategoryDao extends MiniDao<MstCategoryModel> {

	public MstCategoryDao(SessionFactory factory) {
		super(factory);
	}
}
