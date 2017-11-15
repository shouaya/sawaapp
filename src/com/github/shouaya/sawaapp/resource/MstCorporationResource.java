package com.github.shouaya.sawaapp.resource;

import com.github.shouaya.sawaapp.api.MstCorporationIf;
import com.github.shouaya.sawaapp.dao.MstCorporationDao;
import com.github.shouaya.sawaapp.model.MstCorporationModel;
import com.jialu.sawa.utility.MiniBean;
import com.jialu.sawa.utility.MiniCrudResource;
import com.jialu.sawa.vo.*;

import java.util.List;

/**
 * @author sawa
 * 商号
 */
public class MstCorporationResource extends MiniCrudResource<MstCorporationModel, MstCorporationDao> implements MstCorporationIf{

	public MstCorporationResource(MiniBean config) {
		super(config);
	}

	@Override
	public MstCorporationDao getDao() {
		return config.getDao(MstCorporationDao.class);
	}
	
	@Override
	public Class<MstCorporationModel> getModelT() {
		return MstCorporationModel.class;
	}
	
	/**
	 * IDより
	 */
	@Override
	public OperatorResult<MstCorporationModel> getById(Integer id) {
		return super._getById(id);
	}
	/**
	 * クエリより
	 */
	@Override
	public OperatorResult<MstCorporationModel> getByQuery(MiniQuery query) {
		return super._getByQuery(query);
	}
	/**
	 * 保存
	 */
	@Override
	public OperatorResult<MstCorporationModel> save(OperatorRole role,MstCorporationModel obj) {
		return super._save(role,obj);
	}
	/**
	 * 削除
	 */
	@Override
	public OperatorResult<MstCorporationModel> delete(OperatorRole role, Integer id) {
		return super._delete(role,id);
	}
	/**
	 * リスク
	 */
	@Override
	public OperatorResult<List<MstCorporationModel>> list(MiniQuery query) {
		return super._list(query);
	}
	
}
