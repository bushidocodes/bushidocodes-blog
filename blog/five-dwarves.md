---
templateKey: blog-post
category: Tech
title: The Five Dwarves. Exploring non-Amazon IaaS Options
date: 2011-11-20T03:06:00-04:00
author: spmcbride1201
slug: five-iaas-dwarves/
---

With IBM moving towards Cloud Computing and the zEnterprise turning into a &#8220;Cloud-in-a-box,&#8221; it is increasingly important to track developments in the public infrastructure-as-a-service (IaaS) space. Most everyone familiar with Cloud Computing knows about Amazon Web Services (AWS). IBM even offers pre-built images for AWS with many of their software products, including Tivoli and WebSphere. Despite AWS&#8217; market strength, there are numerous other public cloud providers moving into the IaaS space. This post will look at some of the other key options for building a public IaaS cloud.

## OpenStack

The OpenStack software project started as a cooperative venture between Rackspace and NASA to establish an open-source alternative to Amazon Web Services (AWS). To date, it has released three key components (Compute, Object Storage, and Image Service) under the terms of the Apache License for open-source software. Because this software is open-source and freely available, it can be implemented as either a public cloud (on leased servers offered by Rackspace and others), a private cloud (on a company’s personally-owned hardware), or a hybrid cloud combining public and private elements. Additionally, OpenStack is compatible with numerous full-virtualization and para-virtualization implementations, including VMWare, Xen, and KVM. OpenStack benefits from strong support from its open-source developer community and its numerous industry partners, including AMD, Canonical, Cisco, Citrix, Dell, HP, and Intel. These advantages allow a customer to prototype, test, and deploy a customized cloud infrastructure without fears of vendor or technological lock-in.

## Cloud.com

Cloud.com began life as an open-core IaaS package, meaning that it offers two levels of products: a basic open-source community version called CloudStack and a premium Cloud.com enterprise offering that included additional premium features (such as the provisioning of non-virtualized bare-metal hosts). Earlier this year, Citrix purchased Cloud.com and unified the two products as fully open-source software under the GPU GPL v3 license. In addition to CloudStack’s previous support for Xen, KVM, and the latest VMWare products, Citrix has recently announced that CloudStack will soon support the Microsoft Hyper-V hypervisor. A particular strength is that CloudStack can run multiple hypervisors simultaneously. Because of its involvement in the OpenStack project, Citrix is attempted to unify features between OpenStack and CloudStack, but due to licensing differences (Apache vs. GPLv3), CloudStack features cannot be added to OpenStack.

## Eucalyptus / Ubuntu Enterprise Cloud

After starting life as a student research project at UC Santa Barbara, Eucalyptus was offered as an open-core IaaS product. The Eucalyptus Enterprise Edition (E3) possesses a number of premium paid features, including SAN integration and advanced VMWare compatibility, that are not yet offered by any of the fully open-source solutions. Like OpenStack, Eucalyptus originally partnered with NASA, but frustration over Eucalyptus Systems Inc. refusing to share advanced functionality associated with E3 led this partnership to fall through. Support for Eucalyptus is included in Ubuntu (rebranded as the Ubuntu Enterprise Cloud), but Cannonical has recently announced that OpenStack will be its default Ubuntu cloud solution in future releases. Eucalyptus will nevertheless still be supported by Ubuntu and remains highly compatible with most Linux flavors. A particular advantage for Eucalyptus is its implementation of the Amazon EC2 API stack, which makes it an excellent test bed and development tool prior to uploading to the Amazon Cloud.

## Nimbus

Nimbus is an IaaS implementation that specialized in providing cloud solutions for the scientific community. It is compatible with KVM and Xen, and implements most of the Amazon EC2 API. A primary goal of Nimbus is to allow universities and research institutions to share their cloud infrastructures, allowing research projects to access and pool IaaS computer resources as needed. Researchers can submit requests for IaaS resources from a variety of organizations through the scienceclouds.org website. This can be considered an extension of the grid computing concept from batch processing to the cloud, allowing researchers to configure and deploy customized virtual machines on remote resources as needed.

## OpenNebula

OpenNebula began as an academic research project on IaaS by Spanish computer science professors Ignacio M. Llorente and Ruben Santiago Montero. Based on the success of their research, these professors founded the company C12G out of Madrid to promote OpenNebula as an international open-source cloud standard (under the Apache license) and provide commercial support for their open-source commercial offerings. OpenNebula is focused on maximizing compatibility with existing data center resources in creating a private cloud infrastructure. It is able to manage virtual machines across private and public resources to create a hybrid cloud, and it has a greater degree of elasticity and dynamic scalability than Eucalyptus. The OpenNebula standard is increasingly popular in Europe, and it is seeking support from European standardization organizations.

## Conclusion

Between all of these non-Amazon IaaS offerings, I believe that OpenStack has the greatest promise to become an important public cloud player due to its fully open-source license, its substantial industry and community support, and its flexibility with various types of hypervisors. An OpenStack implementation would offers the greatest degree of flexibility for shifting virtualized machines across public and private clouds as needed. A customer could rest assured that they would not become locked into a particular cloud provider due to the use of proprietary vendor software or incompatibility between hypervisors. Although not currently the most feature rich offering, OpenStack’s significant industry and community support effectively guarantees that this solution will continue to improve and implement new features over time.

This post was originally hosted on the [Millennial Mainframer blog](https://web.archive.org/web/20190417013800/http://millennialmainframer.com/2011/11/the-five-dwarfs-exploring-non-amazon-iaas-options/)
