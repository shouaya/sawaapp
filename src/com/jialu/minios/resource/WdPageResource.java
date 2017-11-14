package com.jialu.minios.resource;

import com.jialu.minios.api.WdPageIf;
import com.jialu.minios.dao.WdPageDao;
import com.jialu.minios.model.WdPageModel;
import com.jialu.sawa.utility.MiniBean;
import com.jialu.sawa.utility.MiniCrudResource;
import com.jialu.sawa.vo.*;

import java.util.List;

/**
 * @author sawa
 * 会社ページ
 */
public class WdPageResource extends MiniCrudResource<WdPageModel, WdPageDao> implements WdPageIf{

	public WdPageResource(MiniBean config) {
		super(config);
	}

	@Override
	public WdPageDao getDao() {
		return config.getDao(WdPageDao.class);
	}
	
	@Override
	public Class<WdPageModel> getModelT() {
		return WdPageModel.class;
	}
	
	/**
	 * IDより
	 */
	@Override
	public OperatorResult<WdPageModel> getById(Integer id) {
		return super._getById(id);
	}
	/**
	 * クエリより
	 */
	@Override
	public OperatorResult<WdPageModel> getByQuery(MiniQuery query) {
		return super._getByQuery(query);
	}
	/**
	 * 保存
	 */
	@Override
	public OperatorResult<WdPageModel> save(OperatorRole role,WdPageModel obj) {
		return super._save(role,obj);
	}
	/**
	 * 削除
	 */
	@Override
	public OperatorResult<WdPageModel> delete(OperatorRole role, Integer id) {
		return super._delete(role,id);
	}
	/**
	 * リスク
	 */
	@Override
	public OperatorResult<List<WdPageModel>> list(MiniQuery query) {
		return super._list(query);
	}
	
}
