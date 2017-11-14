package com.jialu.minios.resource;

import com.jialu.minios.api.WdCocategoryIf;
import com.jialu.minios.dao.WdCocategoryDao;
import com.jialu.minios.model.WdCocategoryModel;
import com.jialu.sawa.utility.MiniBean;
import com.jialu.sawa.utility.MiniCrudResource;
import com.jialu.sawa.vo.*;

import java.util.List;

/**
 * @author sawa
 * 会社業種
 */
public class WdCocategoryResource extends MiniCrudResource<WdCocategoryModel, WdCocategoryDao> implements WdCocategoryIf{

	public WdCocategoryResource(MiniBean config) {
		super(config);
	}

	@Override
	public WdCocategoryDao getDao() {
		return config.getDao(WdCocategoryDao.class);
	}
	
	@Override
	public Class<WdCocategoryModel> getModelT() {
		return WdCocategoryModel.class;
	}
	
	/**
	 * IDより
	 */
	@Override
	public OperatorResult<WdCocategoryModel> getById(Integer id) {
		return super._getById(id);
	}
	/**
	 * クエリより
	 */
	@Override
	public OperatorResult<WdCocategoryModel> getByQuery(MiniQuery query) {
		return super._getByQuery(query);
	}
	/**
	 * 保存
	 */
	@Override
	public OperatorResult<WdCocategoryModel> save(OperatorRole role,WdCocategoryModel obj) {
		return super._save(role,obj);
	}
	/**
	 * 削除
	 */
	@Override
	public OperatorResult<WdCocategoryModel> delete(OperatorRole role, Integer id) {
		return super._delete(role,id);
	}
	/**
	 * リスク
	 */
	@Override
	public OperatorResult<List<WdCocategoryModel>> list(MiniQuery query) {
		return super._list(query);
	}
	
}
