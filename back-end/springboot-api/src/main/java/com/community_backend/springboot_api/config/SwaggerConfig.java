package com.community_backend.springboot_api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springdoc.core.models.GroupedOpenApi;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;


@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi userApi() {
        return GroupedOpenApi.builder()
                .group("users")
                .pathsToMatch("/api/**")
                .build();
    }

    @Bean
    public Info apiInfo() {
        return new Info()
                .title("Users API REST")
                .description("API REST de cadastro de usuários")
                .version("1.0")
                .termsOfService("Terms of Service")
                .contact(new Contact()
                        .name("Victor Augsuto")
                        .url("https://github.com/victorIsDeving")
                        .email("victor.augusto.monteiro@usp.br"))
                .license(new License()
                        .name("Apache License Version 2.0")
                        .url("https://www.apache.org/licenses/LICENSE-2.0"));
    }

}
