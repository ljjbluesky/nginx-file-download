package com.example.persist.must;

import com.example.domain.Account;

public interface AccountRMapper {
	
	public Account selectById(long id);
	
	public Account selectByNameAndPassword(Account e);

}
