package com.github.shouaya.sawaapp.resource;

import com.github.shouaya.sawaapp.api.MstCategoryIf;
import com.github.shouaya.sawaapp.dao.MstCategoryDao;
import com.github.shouaya.sawaapp.model.MstCategoryModel;
import com.jialu.sawa.utility.MiniBean;
import com.jialu.sawa.utility.MiniCrudResource;
import com.jialu.sawa.vo.*;

import java.util.List;

/**
 * @author sawa
 * 業界分類
 */
public class MstCategoryResource extends MiniCrudResource<MstCategoryModel, MstCategoryDao> implements MstCategoryIf{

	public MstCategoryResource(MiniBean config) {
		super(config);
	}

	@Override
	public MstCategoryDao getDao() {
		return config.getDao(MstCategoryDao.class);
	}
	
	@Override
	public Class<MstCategoryModel> getModelT() {
		return MstCategoryModel.class;
	}
	
	/**
	 * IDより
	 */
	@Override
	public OperatorResult<MstCategoryModel> getById(Integer id) {
		return super._getById(id);
	}
	/**
	 * クエリより
	 */
	@Override
	public OperatorResult<MstCategoryModel> getByQuery(MiniQuery query) {
		return super._getByQuery(query);
	}
	/**
	 * 保存
	 */
	@Override
	public OperatorResult<MstCategoryModel> save(OperatorRole role,MstCategoryModel obj) {
		return super._save(role,obj);
	}
	/**
	 * 削除
	 */
	@Override
	public OperatorResult<MstCategoryModel> delete(OperatorRole role, Integer id) {
		return super._delete(role,id);
	}
	/**
	 * リスク
	 */
	@Override
	public OperatorResult<List<MstCategoryModel>> list(MiniQuery query) {
		return super._list(query);
	}
	
}
