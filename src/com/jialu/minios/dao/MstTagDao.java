package com.jialu.minios.dao;

import org.hibernate.SessionFactory;

import com.jialu.minios.model.MstTagModel;
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
