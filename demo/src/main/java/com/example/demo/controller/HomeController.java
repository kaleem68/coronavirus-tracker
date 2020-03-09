package com.example.demo.controller;

import java.util.List;

import com.example.demo.model.LocationStats;
import com.example.demo.service.CoronaVirusData_Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class HomeController {

    @Autowired
    CoronaVirusData_Service coronaVirusData_Service;


    @GetMapping("/home")
    public  List<LocationStats> home() {
        List<LocationStats> allStats = coronaVirusData_Service.getAllStats();
       
        // int totalReportedCases = allStats.stream().mapToInt(stat -> stat.getLatestTotalCases()).sum();
        // int totalNewCases = allStats.stream().mapToInt(stat -> stat.getDiffFromPrevDay()).sum();
        // model.addAttribute("locationStats", allStats);
        // model.addAttribute("totalReportedCases", totalReportedCases);
        // model.addAttribute("totalNewCases", totalNewCases);

        return allStats;
    }


}

