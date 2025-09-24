package com.klef.fsd.sdp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.klef.fsd.sdp.model.Admin;
import com.klef.fsd.sdp.model.Customer;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long> 
{
	
	public Admin findByUsernameAndPassword(String username, String password);
}
