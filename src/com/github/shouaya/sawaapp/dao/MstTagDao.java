package com.github.shouaya.sawaapp.dao;

import org.hibernate.SessionFactory;

import com.github.shouaya.sawaapp.model.MstTagModel;
import com.jialu.sawa.utility.MiniDao;

/**
 * @author sawa
 * tag
 */
public class MstTagDao extends MiniDao<MstTagModel> {

	public MstTagDao(SessionFactory factory) {
		super(factory);
	}
}
