package com.jialu.minios.api;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import javax.annotation.security.RolesAllowed;
import com.jialu.minios.model.MstTagModel;
import com.jialu.sawa.vo.*;

import io.dropwizard.auth.Auth;
import java.util.List;

import io.dropwizard.hibernate.UnitOfWork;

/**
 * @author sawa
 * tag
 */
@Path("tag")
public interface MstTagIf {

	/**
	 * IDより
	 */
	@GET
	@UnitOfWork
	@Path("/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<MstTagModel> getById(@PathParam("id") Integer id);
	/**
	 * クエリより
	 */
	@POST
	@UnitOfWork
	@Path("/query")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<MstTagModel> getByQuery(MiniQuery query);
	/**
	 * 保存
	 */
	@POST
	@UnitOfWork
	@Path("/save")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@RolesAllowed({ "ADMIN" })
	public abstract OperatorResult<MstTagModel> save(@Auth OperatorRole role,MstTagModel obj);
	/**
	 * 削除
	 */
	@POST
	@UnitOfWork
	@Path("/delete/{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	@RolesAllowed({ "ADMIN" })
	public abstract OperatorResult<MstTagModel> delete(@Auth OperatorRole role,@PathParam("id") Integer id);
	/**
	 * リスク
	 */
	@POST
	@UnitOfWork
	@Path("/list")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public abstract OperatorResult<List<MstTagModel>> list(MiniQuery query);
	
}

