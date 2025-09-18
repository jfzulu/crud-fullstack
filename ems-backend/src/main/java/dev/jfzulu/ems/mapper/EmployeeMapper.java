package dev.jfzulu.ems.mapper;

import dev.jfzulu.ems.dto.EmployeeDTO;
import dev.jfzulu.ems.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDTO mapToEmployeeDTO(Employee employee) {
        return new EmployeeDTO(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getPhone(),
                employee.getJobTitle(),
                employee.getEmail());
    }

    public static Employee mapToEmployee(EmployeeDTO employeeDTO) {
        return new Employee(
                employeeDTO.getId(),
                employeeDTO.getFirstName(),
                employeeDTO.getLastName(),
                employeeDTO.getPhone(),
                employeeDTO.getJobTitle(),
                employeeDTO.getEmail());
    }

}
