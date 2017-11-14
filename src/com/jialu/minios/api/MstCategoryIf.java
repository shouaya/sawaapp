package com.jialu.minios.api;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import javax.annotation.security.RolesAllowed;
import com.jialu.minios.model.MstCategoryModel;
import com.jialu.sawa.vo.*;

import io.dropwizard.auth.Auth;
import java.util.List;

import io.dropwizard.hibernate.UnitOfWork;

/**
 * @author sawa
 * 業界分類
 */
@Path("category")
public interface MstCategoryIf {

	/**
	 * IDより
	 */
	@GET
	@UnitOfWork
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<MstCategoryModel> getById(@PathParam("id") Integer id);
	/**
	 * クエリより
	 */
	@POST
	@UnitOfWork
	@Path("/query")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<MstCategoryModel> getByQuery(MiniQuery query);
	/**
	 * 保存
	 */
	@POST
	@UnitOfWork
	@Path("/save")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@RolesAllowed({ "ADMIN" })
	public abstract OperatorResult<MstCategoryModel> save(@Auth OperatorRole role,MstCategoryModel obj);
	/**
	 * 削除
	 */
	@POST
	@UnitOfWork
	@Path("/delete/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@RolesAllowed({ "ADMIN" })
	public abstract OperatorResult<MstCategoryModel> delete(@Auth OperatorRole role,@PathParam("id") Integer id);
	/**
	 * リスク
	 */
	@POST
	@UnitOfWork
	@Path("/list")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<List<MstCategoryModel>> list(MiniQuery query);
	
}

