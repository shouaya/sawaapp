package com.jialu.minios.process;

import java.lang.reflect.InvocationTargetException;
import java.util.ArrayList;
import java.util.function.Function;

import com.jialu.minios.dao.WdCustomerDao;
import com.jialu.minios.model.WdCustomerModel;
import com.jialu.minios.vo.Customer;
import com.jialu.sawa.base.model.MiniUserModel;
import com.jialu.sawa.base.process.UserProcess;
import com.jialu.sawa.utility.MiniBean;
import com.jialu.sawa.utility.MiniModel;
import com.jialu.sawa.vo.MiniPair;
import com.jialu.sawa.vo.MiniQuery;
import com.jialu.sawa.vo.OperatorResult;

/**
 * @author shosho BatchProcess
 */
public class BatchProcess {

	/**
	 * @param config
	 * @param customer
	 * @return
	 * @throws IllegalAccessException
	 * @throws InvocationTargetException
	 * @throws NoSuchMethodException
	 */
	public static OperatorResult<MiniUserModel> customerRegist(MiniBean config, Customer customer)
			throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
		Function<Integer, MiniModel> saveCustomer = (userId) -> {
			try {
				MiniQuery qeury = new MiniQuery();
				qeury.setName("wd_customer-phone");
				qeury.setParams(new ArrayList<MiniPair>());
				qeury.getParams().add(new MiniPair("phone", customer.getPhone()));
				WdCustomerDao dao = config.getDao(WdCustomerDao.class);
				WdCustomerModel model = dao.findOneByQuery(qeury);
				if (model == null) {
					model = new WdCustomerModel();
				}
				model.setCompany(customer.getCompany());
				model.setMail(customer.getMail());
				model.setMei(customer.getMei());
				model.setSei(customer.getSei());
				model.setPhone(customer.getPhone());
				model.setUser_id(userId);
				return dao.save(model);
			} catch (IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
				return null;
			}
		};
		OperatorResult<MiniUserModel> result = UserProcess.sendResgistCode(saveCustomer, customer.getPhone(), config);
		return result;
	}
}
