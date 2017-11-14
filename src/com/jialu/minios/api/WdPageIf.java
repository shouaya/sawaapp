package com.jialu.minios.api;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import javax.annotation.security.RolesAllowed;
import com.jialu.minios.model.WdPageModel;
import com.jialu.sawa.vo.*;

import io.dropwizard.auth.Auth;
import java.util.List;

import io.dropwizard.hibernate.UnitOfWork;

/**
 * @author sawa
 * 会社ページ
 */
@Path("page")
public interface WdPageIf {

	/**
	 * IDより
	 */
	@GET
	@UnitOfWork
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<WdPageModel> getById(@PathParam("id") Integer id);
	/**
	 * クエリより
	 */
	@POST
	@UnitOfWork
	@Path("/query")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<WdPageModel> getByQuery(MiniQuery query);
	/**
	 * 保存
	 */
	@POST
	@UnitOfWork
	@Path("/save")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@RolesAllowed({ "ADMIN" })
	public abstract OperatorResult<WdPageModel> save(@Auth OperatorRole role,WdPageModel obj);
	/**
	 * 削除
	 */
	@POST
	@UnitOfWork
	@Path("/delete/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@RolesAllowed({ "ADMIN" })
	public abstract OperatorResult<WdPageModel> delete(@Auth OperatorRole role,@PathParam("id") Integer id);
	/**
	 * リスク
	 */
	@POST
	@UnitOfWork
	@Path("/list")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<List<WdPageModel>> list(MiniQuery query);
	
}

