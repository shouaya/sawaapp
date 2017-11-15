package com.github.shouaya.sawaapp.dao;

import org.hibernate.SessionFactory;

import com.github.shouaya.sawaapp.model.MstCategoryModel;
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
