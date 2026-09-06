---
title: "Understanding Application Gateway Ingress Controller in Azure"
date: 2026-09-06
category: "Technology"
subCategory: "Kubernetes"
tags: ["Azure", "Application Gateway Ingress Controller", "Kubernetes", "AKS"]
readingTime: "2 min"
coverImage: "/blog_images/agic_icon.jpg"
---

Azure Application Gateway Ingress Controller (AGIC) is a Kubernetes application that allows you to use Azure Application Gateway as an ingress controller for workloads running in Azure Kubernetes Service (AKS). It manages external access to applications by configuring Application Gateway based on Kubernetes Ingress resources.

AGIC continuously monitors the Kubernetes cluster for changes in Ingress resources, services, and pods. When a configuration changes, AGIC automatically updates Application Gateway routing rules, backend pools, and listeners. This eliminates the need to manually configure Application Gateway whenever an application is deployed or modified.

One of the major benefits of AGIC is that it provides Layer 7 load balancing, allowing traffic to be routed based on hostnames and URL paths. It also supports features such as TLS termination, Web Application Firewall (WAF), and SSL policies.

For DevOps teams, AGIC simplifies application exposure, improves security, and integrates Azure networking directly with Kubernetes deployments. It is especially useful for organizations running production applications on AKS.

Here is a diagram of the AGIC architecture:

![Entra ID Architecture Diagram](/blog_images/agic_icon_1.jpg)


