package com.github.shouaya.sawaapp.resource;

import com.github.shouaya.sawaapp.api.MstTagIf;
import com.github.shouaya.sawaapp.dao.MstTagDao;
import com.github.shouaya.sawaapp.model.MstTagModel;
import com.jialu.sawa.utility.MiniBean;
import com.jialu.sawa.utility.MiniCrudResource;
import com.jialu.sawa.vo.*;

import java.util.List;

/**
 * @author sawa
 * tag
 */
public class MstTagResource extends MiniCrudResource<MstTagModel, MstTagDao> implements MstTagIf{

	public MstTagResource(MiniBean config) {
		super(config);
	}

	@Override
	public MstTagDao getDao() {
		return config.getDao(MstTagDao.class);
	}
	
	@Override
	public Class<MstTagModel> getModelT() {
		return MstTagModel.class;
	}
	
	/**
	 * IDより
	 */
	@Override
	public OperatorResult<MstTagModel> getById(Integer id) {
		return super._getById(id);
	}
	/**
	 * クエリより
	 */
	@Override
	public OperatorResult<MstTagModel> getByQuery(MiniQuery query) {
		return super._getByQuery(query);
	}
	/**
	 * 保存
	 */
	@Override
	public OperatorResult<MstTagModel> save(OperatorRole role,MstTagModel obj) {
		return super._save(role,obj);
	}
	/**
	 * 削除
	 */
	@Override
	public OperatorResult<MstTagModel> delete(OperatorRole role, Integer id) {
		return super._delete(role,id);
	}
	/**
	 * リスク
	 */
	@Override
	public OperatorResult<List<MstTagModel>> list(MiniQuery query) {
		return super._list(query);
	}
	
}
