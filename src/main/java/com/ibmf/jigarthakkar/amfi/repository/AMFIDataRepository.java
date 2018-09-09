package com.ibmf.jigarthakkar.amfi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ibmf.jigarthakkar.amfi.entity.AMFIData;

@Repository
public interface AMFIDataRepository extends JpaRepository<AMFIData, Long> {

}
