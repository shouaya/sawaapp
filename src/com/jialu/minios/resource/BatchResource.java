package com.jialu.minios.resource;

import com.codahale.metrics.annotation.Timed;
import com.jialu.minios.process.BatchProcess;
import com.jialu.minios.vo.Customer;
import com.jialu.sawa.base.model.MiniUserModel;
import com.jialu.sawa.utility.MiniBean;
import com.jialu.sawa.utility.MiniResource;
import com.jialu.sawa.vo.OperatorResult;

import io.dropwizard.hibernate.UnitOfWork;

import java.lang.reflect.InvocationTargetException;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * @author shosho batch
 */
@Path("batch")
public class BatchResource extends MiniResource {

	public BatchResource(MiniBean config) {
		super(config);
	}

	@POST
	@Timed
	@Path("/customer/regist")
	@UnitOfWork
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public OperatorResult<MiniUserModel> customerRegist(Customer customer) {
		OperatorResult<MiniUserModel> result = new OperatorResult<MiniUserModel>();
		try {
			result = BatchProcess.customerRegist(this.config, customer);
		} catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
			LOGGER.error("customerRegist", e);
		}
		return result;
	}

}
