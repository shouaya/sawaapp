package com.github.shouaya.sawaapp.resource;

import com.github.shouaya.sawaapp.api.WdCompanyIf;
import com.github.shouaya.sawaapp.dao.WdCompanyDao;
import com.github.shouaya.sawaapp.model.WdCompanyModel;
import com.jialu.sawa.utility.MiniBean;
import com.jialu.sawa.utility.MiniCrudResource;
import com.jialu.sawa.vo.*;

import java.util.List;

/**
 * @author sawa
 * 会社
 */
public class WdCompanyResource extends MiniCrudResource<WdCompanyModel, WdCompanyDao> implements WdCompanyIf{

	public WdCompanyResource(MiniBean config) {
		super(config);
	}

	@Override
	public WdCompanyDao getDao() {
		return config.getDao(WdCompanyDao.class);
	}
	
	@Override
	public Class<WdCompanyModel> getModelT() {
		return WdCompanyModel.class;
	}
	
	/**
	 * IDより
	 */
	@Override
	public OperatorResult<WdCompanyModel> getById(Integer id) {
		return super._getById(id);
	}
	/**
	 * クエリより
	 */
	@Override
	public OperatorResult<WdCompanyModel> getByQuery(MiniQuery query) {
		return super._getByQuery(query);
	}
	/**
	 * 保存
	 */
	@Override
	public OperatorResult<WdCompanyModel> save(OperatorRole role,WdCompanyModel obj) {
		return super._save(role,obj);
	}
	/**
	 * 削除
	 */
	@Override
	public OperatorResult<WdCompanyModel> delete(OperatorRole role, Integer id) {
		return super._delete(role,id);
	}
	/**
	 * リスク
	 */
	@Override
	public OperatorResult<List<WdCompanyModel>> list(MiniQuery query) {
		return super._list(query);
	}
	
}
