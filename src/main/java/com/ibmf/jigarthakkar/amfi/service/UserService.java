package com.ibmf.jigarthakkar.amfi.service;

import java.util.List;

import com.ibmf.jigarthakkar.amfi.dto.UserDto;

/**
 * Created by ashish on 13/5/17.
 */
public interface UserService {
    UserDto getUserById(Integer userId);
    void saveUser(UserDto userDto);
    List<UserDto> getAllUsers();
}
