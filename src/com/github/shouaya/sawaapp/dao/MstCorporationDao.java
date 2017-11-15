package com.github.shouaya.sawaapp.dao;

import org.hibernate.SessionFactory;

import com.github.shouaya.sawaapp.model.MstCorporationModel;
import com.jialu.sawa.utility.MiniDao;

/**
 * @author sawa
 * 商号
 */
public class MstCorporationDao extends MiniDao<MstCorporationModel> {

	public MstCorporationDao(SessionFactory factory) {
		super(factory);
	}
}
