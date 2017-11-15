package com.github.shouaya.sawaapp.resource;

import com.github.shouaya.sawaapp.api.WdCotagIf;
import com.github.shouaya.sawaapp.dao.WdCotagDao;
import com.github.shouaya.sawaapp.model.WdCotagModel;
import com.jialu.sawa.utility.MiniBean;
import com.jialu.sawa.utility.MiniCrudResource;
import com.jialu.sawa.vo.*;

import java.util.List;

/**
 * @author sawa
 * 会社tag
 */
public class WdCotagResource extends MiniCrudResource<WdCotagModel, WdCotagDao> implements WdCotagIf{

	public WdCotagResource(MiniBean config) {
		super(config);
	}

	@Override
	public WdCotagDao getDao() {
		return config.getDao(WdCotagDao.class);
	}
	
	@Override
	public Class<WdCotagModel> getModelT() {
		return WdCotagModel.class;
	}
	
	/**
	 * IDより
	 */
	@Override
	public OperatorResult<WdCotagModel> getById(Integer id) {
		return super._getById(id);
	}
	/**
	 * クエリより
	 */
	@Override
	public OperatorResult<WdCotagModel> getByQuery(MiniQuery query) {
		return super._getByQuery(query);
	}
	/**
	 * 保存
	 */
	@Override
	public OperatorResult<WdCotagModel> save(OperatorRole role,WdCotagModel obj) {
		return super._save(role,obj);
	}
	/**
	 * 削除
	 */
	@Override
	public OperatorResult<WdCotagModel> delete(OperatorRole role, Integer id) {
		return super._delete(role,id);
	}
	/**
	 * リスク
	 */
	@Override
	public OperatorResult<List<WdCotagModel>> list(MiniQuery query) {
		return super._list(query);
	}
	
}
