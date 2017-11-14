package com.jialu.minios.resource;

import com.jialu.minios.api.WdCustomerIf;
import com.jialu.minios.dao.WdCustomerDao;
import com.jialu.minios.model.WdCustomerModel;
import com.jialu.sawa.utility.MiniBean;
import com.jialu.sawa.utility.MiniCrudResource;
import com.jialu.sawa.vo.*;

import java.util.List;

/**
 * @author sawa
 * 顧客
 */
public class WdCustomerResource extends MiniCrudResource<WdCustomerModel, WdCustomerDao> implements WdCustomerIf{

	public WdCustomerResource(MiniBean config) {
		super(config);
	}

	@Override
	public WdCustomerDao getDao() {
		return config.getDao(WdCustomerDao.class);
	}
	
	@Override
	public Class<WdCustomerModel> getModelT() {
		return WdCustomerModel.class;
	}
	
	/**
	 * IDより
	 */
	@Override
	public OperatorResult<WdCustomerModel> getById(Integer id) {
		return super._getById(id);
	}
	/**
	 * クエリより
	 */
	@Override
	public OperatorResult<WdCustomerModel> getByQuery(MiniQuery query) {
		return super._getByQuery(query);
	}
	/**
	 * 保存
	 */
	@Override
	public OperatorResult<WdCustomerModel> save(OperatorRole role,WdCustomerModel obj) {
		return super._save(role,obj);
	}
	/**
	 * 削除
	 */
	@Override
	public OperatorResult<WdCustomerModel> delete(OperatorRole role, Integer id) {
		return super._delete(role,id);
	}
	/**
	 * リスク
	 */
	@Override
	public OperatorResult<List<WdCustomerModel>> list(MiniQuery query) {
		return super._list(query);
	}
	
}
