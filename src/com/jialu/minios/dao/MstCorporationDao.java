package com.jialu.minios.dao;

import org.hibernate.SessionFactory;

import com.jialu.minios.model.MstCorporationModel;
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
