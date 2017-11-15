package com.github.shouaya.sawaapp.api;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import javax.annotation.security.RolesAllowed;
import com.github.shouaya.sawaapp.model.WdCompanyModel;
import com.jialu.sawa.vo.*;

import io.dropwizard.auth.Auth;
import java.util.List;

import io.dropwizard.hibernate.UnitOfWork;

/**
 * @author sawa
 * 会社
 */
@Path("company")
public interface WdCompanyIf {

	/**
	 * IDより
	 */
	@GET
	@UnitOfWork
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<WdCompanyModel> getById(@PathParam("id") Integer id);
	/**
	 * クエリより
	 */
	@POST
	@UnitOfWork
	@Path("/query")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<WdCompanyModel> getByQuery(MiniQuery query);
	/**
	 * 保存
	 */
	@POST
	@UnitOfWork
	@Path("/save")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@RolesAllowed({ "ADMIN" })
	public abstract OperatorResult<WdCompanyModel> save(@Auth OperatorRole role,WdCompanyModel obj);
	/**
	 * 削除
	 */
	@POST
	@UnitOfWork
	@Path("/delete/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@RolesAllowed({ "ADMIN" })
	public abstract OperatorResult<WdCompanyModel> delete(@Auth OperatorRole role,@PathParam("id") Integer id);
	/**
	 * リスク
	 */
	@POST
	@UnitOfWork
	@Path("/list")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<List<WdCompanyModel>> list(MiniQuery query);
	
}

