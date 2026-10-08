export const caseStudyDetails = Object.fromEntries([
  {
    "slug": "paints-manufacturing-in-odoo",
    "detailTitle": "How a Paint Manufacturer Transformed Manufacturing Operations",
    "seoDescription": "A solution connecting dual-unit inventory, tint additions, quality inspection, machine tracking, packaging, and production costing.",
    "intro": "A solution connecting dual-unit inventory, tint additions, quality inspection, machine tracking, packaging, and production costing.",
    "meta": [
      {
        "label": "Services",
        "value": "Consulting, Implementation & Customisation"
      },
      {
        "label": "Industry",
        "value": "Paint Manufacturing"
      },
      {
        "label": "Location",
        "value": "Rajkot, Gujarat, India"
      },
      {
        "label": "Platform",
        "value": "Odoo 18 Community"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is a growing paints manufacturing company based in Rajkot, Gujarat, producing multiple paint variants across several product categories. Its operations span raw material procurement, batch-wise production, tinting and shade adjustment, quality control, packaging into multiple container sizes, and dealer-based sales and dispatch."
      },
      {
        "type": "p",
        "text": "Paint manufacturing carries requirements that generic manufacturing software rarely accommodates. Materials are purchased by weight but sold by volume, with a different conversion for every product. Tints are added during production rather than fixed at the formulation stage. Quality is judged on parameters specific to coatings fineness of grind, viscosity, drying time that no standard quality module ships with. The same finished batch is packed into several container sizes before it reaches a dealer."
      },
      {
        "type": "p",
        "text": "As the business scaled, spreadsheets and paper records became progressively harder to maintain, and the gap between how the factory actually worked and what the records showed continued to widen. The company needed a system built around the realities of paint production rather than one it had to work around."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Dual unit of measure across every transaction Raw materials were purchased and consumed in kilograms, while paint was formulated, packed and sold in litres. Because each product carries its own density, the conversion differed from item to item and had to be applied manually at every stage. Purchase, stock and sales figures had to be converted by hand before they could be used together. Quantity mismatches appeared between departments, costing was approximate, and the same material could show two different stock positions depending on who was reading it.",
        "cells": [
          "Dual unit of measure across every transaction Raw materials were purchased and consumed in kilograms, while paint was formulated, packed and sold in litres. Because each product carries its own density, the conversion differed from item to item and had to be applied manually at every stage.",
          "Purchase, stock and sales figures had to be converted by hand before they could be used together. Quantity mismatches appeared between departments, costing was approximate, and the same material could show two different stock positions depending on who was reading it."
        ]
      },
      {
        "type": "tr",
        "text": "No control or record of tint additions Tints were added during production to reach a required shade, but these additions were handled informally and were not recorded against the manufacturing order or the material that was consumed. Formulations drifted between batches, shade consistency depended on individual operators, and tint consumption could not be reconciled against stock or costed into the batch it belonged to.",
        "cells": [
          "No control or record of tint additions Tints were added during production to reach a required shade, but these additions were handled informally and were not recorded against the manufacturing order or the material that was consumed.",
          "Formulations drifted between batches, shade consistency depended on individual operators, and tint consumption could not be reconciled against stock or costed into the batch it belonged to."
        ]
      },
      {
        "type": "tr",
        "text": "Quality checks recorded outside the system Fineness of grind (Hegman gauge), viscosity, weight, drying time and grinding time were measured on the shop floor and written on paper, with no link to the production order they related to. Quality history was difficult to retrieve, batch-level traceability was weak, and recurring quality issues could not be analysed across batches or connected to the materials and conditions that produced them.",
        "cells": [
          "Quality checks recorded outside the system Fineness of grind (Hegman gauge), viscosity, weight, drying time and grinding time were measured on the shop floor and written on paper, with no link to the production order they related to.",
          "Quality history was difficult to retrieve, batch-level traceability was weak, and recurring quality issues could not be analysed across batches or connected to the materials and conditions that produced them."
        ]
      },
      {
        "type": "tr",
        "text": "No visibility of machine usage and production time Machine allocation and running time across shifts were not tracked systematically, so actual production time was known only informally. Scheduling was based on estimates rather than evidence, utilisation could not be analysed, and there was no reliable basis for capacity planning or realistic delivery commitments.",
        "cells": [
          "No visibility of machine usage and production time Machine allocation and running time across shifts were not tracked systematically, so actual production time was known only informally.",
          "Scheduling was based on estimates rather than evidence, utilisation could not be analysed, and there was no reliable basis for capacity planning or realistic delivery commitments."
        ]
      },
      {
        "type": "tr",
        "text": "Packaging disconnected from production  Packing of finished paint into 1L, 4L and 20L containers was handled as a separate activity, with no structured link back to the batch it came from. The relationship between a produced batch and the packed units dispatched to dealers had to be reconstructed manually, weakening traceability and complicating stock reconciliation and dispatch planning.",
        "cells": [
          "Packaging disconnected from production  Packing of finished paint into 1L, 4L and 20L containers was handled as a separate activity, with no structured link back to the batch it came from.",
          "The relationship between a produced batch and the packed units dispatched to dealers had to be reconstructed manually, weakening traceability and complicating stock reconciliation and dispatch planning."
        ]
      },
      {
        "type": "tr",
        "text": "No pre-production cost visibility Expected production cost could not be calculated before a manufacturing order was created, so costs were confirmed only after the batch was complete. Pricing and order-acceptance decisions were made without knowing the expected cost, leaving margin exposed and making commercial responses reactive rather than informed.",
        "cells": [
          "No pre-production cost visibility Expected production cost could not be calculated before a manufacturing order was created, so costs were confirmed only after the batch was complete.",
          "Pricing and order-acceptance decisions were made without knowing the expected cost, leaving margin exposed and making commercial responses reactive rather than informed."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to deliver a manufacturing ERP on Odoo 18 Community that reflected paint production as it actually happens on the floor dual measurement, in-process tinting, coatings-specific quality parameters, machine time, multi-size packing and forward-looking costing within one connected platform."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Manage kg and litre quantities together across purchasing, sales, inventory and manufacturing."
      },
      {
        "type": "li",
        "text": "Maintain product-specific conversion ratios centrally rather than in operator knowledge"
      },
      {
        "type": "li",
        "text": "Create structured, traceable tint additions linked to manufacturing orders"
      },
      {
        "type": "li",
        "text": "Digitise paint-specific quality parameters and attach them to production batches."
      },
      {
        "type": "li",
        "text": "Track machine usage and production time across manufacturing runs."
      },
      {
        "type": "li",
        "text": "Connect finished production with packaging and dealer dispatch."
      },
      {
        "type": "li",
        "text": "Calculate expected production costs before a manufacturing order is created."
      },
      {
        "type": "li",
        "text": "Record planned against actual output to make production variance visible"
      },
      {
        "type": "li",
        "text": "Provide print-ready production documentation for shop-floor and audit use"
      },
      {
        "type": "li",
        "text": "Establish a structured digital foundation on a platform the client fully owns"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Jupical designed and deployed a tailored ERP on Odoo 18 Community, building custom functionality on top of the standard MRP framework rather than forcing the business into a generic workflow."
      },
      {
        "type": "p",
        "text": "The implementation covered:"
      },
      {
        "type": "li",
        "text": "MRP and batch production manufacturing orders, bills of materials and shop-floor execution"
      },
      {
        "type": "li",
        "text": "Secondary UOM kilogram and litre held together on every relevant transaction"
      },
      {
        "type": "li",
        "text": "Product Ratio Master centrally maintained, product-specific conversion ratios"
      },
      {
        "type": "li",
        "text": "Tint management structured in-process tint additions against manufacturing orders"
      },
      {
        "type": "li",
        "text": "Quality check coatings-specific parameters captured on the production order"
      },
      {
        "type": "li",
        "text": "Machine tracking machine allocation, start and end time, and total hours per batch"
      },
      {
        "type": "li",
        "text": "Packaging workflow container-size selection linked to the finished batch"
      },
      {
        "type": "li",
        "text": "Production cost calculator expected total and per-unit cost ahead of manufacturing"
      },
      {
        "type": "li",
        "text": "Dealer delivery dispatch of packed goods connected to the originating batch"
      },
      {
        "type": "li",
        "text": "Custom reports print-ready production documentation with quality and machine records"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "The approach focused on understanding how the factory actually operates and then translating those processes into a familiar, connected digital workflow. The guiding principle throughout was that the system should match the floor, not the other way around."
      },
      {
        "type": "h3",
        "text": "1. Process discovery and workflow mapping"
      },
      {
        "type": "p",
        "text": "Jupical held working sessions with the production, stores, quality and commercial teams, walking the full process from raw material receipt to dealer dispatch."
      },
      {
        "type": "p",
        "text": "The team documented where conversions were being performed, how tints were decided and added, which quality parameters mattered and at what stage, how machines were allocated across shifts, and how packed goods were linked back to their batches. This mapping exposed the specific points at which information was being lost and shaped every design decision that followed."
      },
      {
        "type": "h4",
        "text": "2. Solution design on the standard MRP framework"
      },
      {
        "type": "p",
        "text": "Rather than replacing Odoo's manufacturing logic, Jupical designed extensions that sit on top of it, so that standard MRP behaviour, reporting and upgrade paths remain intact."
      },
      {
        "type": "p",
        "text": "Dual measurement, tint additions, quality capture, machine logging, packaging and costing were each designed as structured additions to the manufacturing order, keeping every paint-specific activity attached to the batch it belongs to."
      },
      {
        "type": "h3",
        "text": "3. Dual unit of measure and ratio configuration"
      },
      {
        "type": "p",
        "text": "Products were configured to carry both a primary kilogram quantity and a secondary litre quantity, with conversion driven by a centrally maintained Product Ratio Master."
      },
      {
        "type": "p",
        "text": "Because ratios are held as master data rather than applied by individual users, the same conversion is used consistently across purchase orders, sales orders, stock moves and production orders and can be reviewed and updated in one place when a formulation changes."
      },
      {
        "type": "h4",
        "text": "4. Custom development for paint-specific operations"
      },
      {
        "type": "p",
        "text": "Jupical developed the workflows that standard manufacturing software does not provide: an Add Tint process recording tint product, quantity and location against the manufacturing order; digital capture of Hegman gauge, viscosity, weight, drying time and grinding time on the production order; machine time logging per batch; a Package It workflow linking container sizes to the finished batch; and a production cost calculator that runs before the manufacturing order is created."
      },
      {
        "type": "p",
        "text": "Actual produced quantity was captured alongside planned quantity in both units, so variance between what was expected and what was made became visible as a matter of routine rather than investigation."
      },
      {
        "type": "h4",
        "text": "5. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed complete batches rather than individual features."
      },
      {
        "type": "p",
        "text": "Scenarios traced a full cycle material receipt in kilograms, batch planning, production with tint additions, quality capture, machine logging, packing into multiple container sizes, dealer dispatch and billing confirming that quantities, conversions, costs and stock positions reconciled at every stage. Key users from each department took part in acceptance testing."
      },
      {
        "type": "h4",
        "text": "6. Training and adoption"
      },
      {
        "type": "p",
        "text": "Role-specific training was delivered so each team understood both the system and its responsibilities within it."
      },
      {
        "type": "p",
        "text": "Production and quality teams were trained on manufacturing orders, tint additions, quality capture and machine logging. Stores teams were trained on dual-unit stock handling. Commercial and accounts teams were trained on costing, packing, dispatch and reporting. Because the workflows mirrored existing practice, training focused on the system rather than on relearning the process."
      },
      {
        "type": "h4",
        "text": "7. Go-live and stabilisation"
      },
      {
        "type": "p",
        "text": "Jupical supported the client through go-live, monitored live usage and resolved issues as they surfaced."
      },
      {
        "type": "p",
        "text": "Conversion ratios, quality parameters, reports and screen layouts were refined during stabilisation to ensure the system held up under everyday production conditions."
      },
      {
        "type": "h3",
        "text": "8. Scalable foundation for future growth"
      },
      {
        "type": "p",
        "text": "The implementation was designed as a long-term foundation rather than a fixed solution."
      },
      {
        "type": "p",
        "text": "Built on Odoo Community with a modular custom layer, the platform can extend to additional products, shades, container sizes, machines, warehouses and users as operations grow with the client retaining full ownership and no licensing constraints on expansion."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Custom Solution What It Delivers",
        "cells": [
          "Custom Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Secondary UOM: Kg & Litre together Products carry both primary kilogram and secondary litre quantities across purchase orders, sales orders, stock moves and production orders, removing manual conversion from every transaction.",
        "cells": [
          "Secondary UOM: Kg & Litre together",
          "Products carry both primary kilogram and secondary litre quantities across purchase orders, sales orders, stock moves and production orders, removing manual conversion from every transaction."
        ]
      },
      {
        "type": "tr",
        "text": "Product Ratio Master Product-specific kg-to-litre ratios are maintained centrally and applied automatically, so conversions stay consistent across departments and can be updated in one controlled place.",
        "cells": [
          "Product Ratio Master",
          "Product-specific kg-to-litre ratios are maintained centrally and applied automatically, so conversions stay consistent across departments and can be updated in one controlled place."
        ]
      },
      {
        "type": "tr",
        "text": "Tint Addition Workflow An Add Tint workflow records tint products, quantities and locations, linking every addition to its manufacturing order so shade adjustments are traceable, costed and reconcilable against stock.",
        "cells": [
          "Tint Addition Workflow",
          "An Add Tint workflow records tint products, quantities and locations, linking every addition to its manufacturing order so shade adjustments are traceable, costed and reconcilable against stock."
        ]
      },
      {
        "type": "tr",
        "text": "Quality Check on Production Orders Hegman gauge, viscosity, weight, drying time and grinding time are captured digitally against each production order, building a retrievable quality history at batch level.",
        "cells": [
          "Quality Check on Production Orders",
          "Hegman gauge, viscosity, weight, drying time and grinding time are captured digitally against each production order, building a retrievable quality history at batch level."
        ]
      },
      {
        "type": "tr",
        "text": "Machine Time Tracking Machine usage, start and end time, and total hours are recorded for each production batch, providing an evidence base for scheduling, utilisation and capacity planning.",
        "cells": [
          "Machine Time Tracking",
          "Machine usage, start and end time, and total hours are recorded for each production batch, providing an evidence base for scheduling, utilisation and capacity planning."
        ]
      },
      {
        "type": "tr",
        "text": "Production Cost Calculator Expected total production cost and cost per unit can be calculated before a manufacturing order is created, moving pricing decisions ahead of production instead of after it.",
        "cells": [
          "Production Cost Calculator",
          "Expected total production cost and cost per unit can be calculated before a manufacturing order is created, moving pricing decisions ahead of production instead of after it."
        ]
      },
      {
        "type": "tr",
        "text": "Packaging workflow \"Package It\" Container types such as 1L, 4L and 20L are selected and linked to the finished batch and dealer dispatch, preserving the connection between what was produced and what was shipped.",
        "cells": [
          "Packaging workflow \"Package It\"",
          "Container types such as 1L, 4L and 20L are selected and linked to the finished batch and dealer dispatch, preserving the connection between what was produced and what was shipped."
        ]
      },
      {
        "type": "tr",
        "text": "Custom Production Report A print-ready production report consolidating production details, quality parameters and machine logs for shop-floor use, customer assurance and internal audit.",
        "cells": [
          "Custom Production Report",
          "A print-ready production report consolidating production details, quality parameters and machine logs for shop-floor use, customer assurance and internal audit."
        ]
      },
      {
        "type": "tr",
        "text": "Actual Produce Quantity Tracking Planned and actual output quantities are recorded in both primary and secondary UOMs, making production variance visible.",
        "cells": [
          "Actual Produce Quantity Tracking",
          "Planned and actual output quantities are recorded in both primary and secondary UOMs, making production variance visible."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Kilogram-to-litre conversions were performed manually at each stage, producing mismatched quantities between departments. Kilogram and litre quantities are managed together on every transaction, driven by centrally maintained product ratios.",
        "cells": [
          "Kilogram-to-litre conversions were performed manually at each stage, producing mismatched quantities between departments.",
          "Kilogram and litre quantities are managed together on every transaction, driven by centrally maintained product ratios."
        ]
      },
      {
        "type": "tr",
        "text": "Conversion ratios lived in operator knowledge and side spreadsheets. Ratios are held as controlled master data, applied automatically and updated in one place.",
        "cells": [
          "Conversion ratios lived in operator knowledge and side spreadsheets.",
          "Ratios are held as controlled master data, applied automatically and updated in one place."
        ]
      },
      {
        "type": "tr",
        "text": "Tint additions were informal, unrecorded and difficult to trace after the fact. Every tint addition is recorded against its manufacturing order, with product, quantity and location captured.",
        "cells": [
          "Tint additions were informal, unrecorded and difficult to trace after the fact.",
          "Every tint addition is recorded against its manufacturing order, with product, quantity and location captured."
        ]
      },
      {
        "type": "tr",
        "text": "Quality parameters were written on paper, disconnected from the batch they described. Quality parameters are captured digitally and attached to each production order, creating a retrievable batch-level history.",
        "cells": [
          "Quality parameters were written on paper, disconnected from the batch they described.",
          "Quality parameters are captured digitally and attached to each production order, creating a retrievable batch-level history."
        ]
      },
      {
        "type": "tr",
        "text": "Machine usage across shifts was tracked informally, if at all. Machine allocation and running time are logged per batch, giving a factual basis for scheduling and utilisation.",
        "cells": [
          "Machine usage across shifts was tracked informally, if at all.",
          "Machine allocation and running time are logged per batch, giving a factual basis for scheduling and utilisation."
        ]
      },
      {
        "type": "tr",
        "text": "Packaging was handled separately from production, breaking the link between batch and dispatched goods. Packaging is connected to the finished batch and carried through to dealer dispatch.",
        "cells": [
          "Packaging was handled separately from production, breaking the link between batch and dispatched goods.",
          "Packaging is connected to the finished batch and carried through to dealer dispatch."
        ]
      },
      {
        "type": "tr",
        "text": "Production cost was known only after manufacturing was complete. Expected total and per-unit cost are available before the manufacturing order is created.",
        "cells": [
          "Production cost was known only after manufacturing was complete.",
          "Expected total and per-unit cost are available before the manufacturing order is created."
        ]
      },
      {
        "type": "tr",
        "text": "Planned and actual output were compared manually, when they were compared at all. Actual produced quantity is recorded against plan in both units, making variance visible as routine information.",
        "cells": [
          "Planned and actual output were compared manually, when they were compared at all.",
          "Actual produced quantity is recorded against plan in both units, making variance visible as routine information."
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "The transformation moved manufacturing processes from informal, untracked and paper-based practices to structured, digital and connected workflows."
      },
      {
        "type": "p",
        "text": "Every batch is now accountable. Kilogram and litre quantities reconcile without manual intervention, tint additions are recorded and costed against the batch that consumed them, quality parameters are attached to the production order they describe, machine time is visible, and packed goods remain connected to the batch they came from through to dealer dispatch."
      },
      {
        "type": "p",
        "text": "Cost visibility moved from after the fact to before the fact, allowing pricing and order decisions to be made with the expected cost already known. Together these changes gave the business traceability it did not previously have and a factual basis for planning, costing and quality analysis on an open-source platform it fully owns."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical did not configure a standard ERP and label it a paint industry solution. Each element — dual UOM, ratio master, tint management, coatings-specific quality parameters, machine tracking, packaging and production costing — was designed after understanding how this factory actually manufactures paint."
      },
      {
        "type": "p",
        "text": "Because the delivered platform mirrored the team's existing process, the system felt familiar from day one while providing a considerably stronger digital foundation beneath it."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "More than delivering an ERP, Jupical helped establish a manufacturing foundation where batches, quality parameters, tint additions, machine usage, packaging and production costs can be managed through connected digital workflows."
      },
      {
        "type": "p",
        "text": "The result is a structured platform that can grow with the business supporting additional products, container sizes, machines and users as manufacturing operations expand."
      }
    ]
  },
  {
    "slug": "travel-solutions-in-odoo",
    "detailTitle": "Beyond Sheets & Chats: A Smarter Way to Run Travel Operations",
    "seoDescription": "A fully custom ERP built around how a multi-service travel agency actually works from first enquiry to final billing.",
    "intro": "A fully custom ERP built around how a multi-service travel agency actually works from first enquiry to final billing.",
    "meta": [
      {
        "label": "Services",
        "value": "Customisation, Consulting & Implementation"
      },
      {
        "label": "Industry",
        "value": "Travel agency"
      },
      {
        "label": "Location",
        "value": "India"
      },
      {
        "label": "Platform",
        "value": "Odoo Community"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "Travenza Holidays is a fast-growing travel services company based in Bangalore, offering holiday packages, air ticketing, visa assistance, hotel bookings, cruise arrangements, forex and insurance."
      },
      {
        "type": "p",
        "text": "Travel is not a standard sales business. A single enquiry can be a one-line air ticket or a twenty-person holiday package spanning flights, hotels, visas, transfers and insurance each needing its own workflow, its own billing information, and its own coordination between departments. As the business grew, the team tried other software built for generic sales operations, and none of it matched how a travel agency actually works. When they approached Jupical, the brief was direct: build something that works the way we do."
      },
      {
        "type": "p",
        "text": "Before Jupical, the operation ran on Google Sheets and WhatsApp flexible tools that had carried the business a long way, but that were increasingly straining under the volume and variety of a multi-service travel operation."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Leads lost with no follow-up system Enquiries came in over WhatsApp, phone and email, logged inconsistently with no pipeline, no assigned owner and no stage tracking. Leads slipped through with no structured follow-up, and conversion rates could not be measured with any confidence.",
        "cells": [
          "Leads lost with no follow-up system Enquiries came in over WhatsApp, phone and email, logged inconsistently with no pipeline, no assigned owner and no stage tracking.",
          "Leads slipped through with no structured follow-up, and conversion rates could not be measured with any confidence."
        ]
      },
      {
        "type": "tr",
        "text": "Billing chaos across service types Air tickets, visa, hotels, cruises and forex each needed different billing information, tracked manually across separate Google Sheets with no shared structure. There was no consistency and no audit trail between services, and reconciling what had actually been billed against what had been delivered took significant manual effort.",
        "cells": [
          "Billing chaos across service types Air tickets, visa, hotels, cruises and forex each needed different billing information, tracked manually across separate Google Sheets with no shared structure.",
          "There was no consistency and no audit trail between services, and reconciling what had actually been billed against what had been delivered took significant manual effort."
        ]
      },
      {
        "type": "tr",
        "text": "Package costing scattered across sheet versions Holiday and corporate package costing lived in Google Sheets, priced line by line. As costing changed, multiple sheet versions piled up for the same package. It became hard to identify the latest version with confidence, and costing history could not be traced back to the lead it belonged to — raising the risk of quoting from an outdated sheet.",
        "cells": [
          "Package costing scattered across sheet versions Holiday and corporate package costing lived in Google Sheets, priced line by line. As costing changed, multiple sheet versions piled up for the same package.",
          "It became hard to identify the latest version with confidence, and costing history could not be traced back to the lead it belonged to — raising the risk of quoting from an outdated sheet."
        ]
      },
      {
        "type": "tr",
        "text": "Visa status had no tracking Group packages involved ticketing, visa, hotels, transfers and insurance, all coordinated over WhatsApp groups with no task ownership or stage tracking. There was no visibility into which applications were done versus pending, and individual applicant status was difficult to check without messaging someone directly.",
        "cells": [
          "Visa status had no tracking Group packages involved ticketing, visa, hotels, transfers and insurance, all coordinated over WhatsApp groups with no task ownership or stage tracking.",
          "There was no visibility into which applications were done versus pending, and individual applicant status was difficult to check without messaging someone directly."
        ]
      },
      {
        "type": "tr",
        "text": "Management had no real-time view Revenue by employee, revenue by service type, lead conversion rates and active packages weren't visible in real time. Reports were assembled manually from multiple spreadsheets at month end, so decisions were made on data that was already weeks out of date.",
        "cells": [
          "Management had no real-time view Revenue by employee, revenue by service type, lead conversion rates and active packages weren't visible in real time.",
          "Reports were assembled manually from multiple spreadsheets at month end, so decisions were made on data that was already weeks out of date."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to give the agency a single connected platform spanning every service line, without forcing the team to abandon the parts of their existing workflow particularly spreadsheet-based costing that already worked well for them."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Give every inquiry a structured, trackable lead lifecycle regardless of channel (WhatsApp, phone, email)."
      },
      {
        "type": "li",
        "text": "Replace scattered, service-specific Excel billing trackers with one consistent, auditable system."
      },
      {
        "type": "li",
        "text": "Keep the team's trusted spreadsheet-based package costing workflow, while linking it directly to each opportunity."
      },
      {
        "type": "li",
        "text": "Bring visibility and ownership to visa application tracking, applicant by applicant."
      },
      {
        "type": "li",
        "text": "Give management a real-time view of revenue, conversion and active packages without manual month-end reporting."
      },
      {
        "type": "li",
        "text": "Structure the organisation by department with role-based access, so each team sees what's relevant to them"
      },
      {
        "type": "li",
        "text": "Attach passports, visa documents, vouchers and proposals directly to the relevant lead, project or task"
      },
      {
        "type": "li",
        "text": "Establish a system flexible enough to grow with the agency's service lines and headcount"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Jupical designed and deployed a tailored CRM and operations platform on Odoo Community, built around the travel inquiry lifecycle rather than a generic sales pipeline."
      },
      {
        "type": "p",
        "text": "The implementation covered:"
      },
      {
        "type": "li",
        "text": "Travel-specific CRM a six-stage lead lifecycle from first enquiry to won or lost"
      },
      {
        "type": "li",
        "text": "Service-wise billing dedicated forms for tickets, visa, hotels, transfers, cruise, insurance, forex and passport renewal"
      },
      {
        "type": "li",
        "text": "Package costing link tracking spreadsheet costing versions attached directly to the opportunity"
      },
      {
        "type": "li",
        "text": "Package project management tasks and coordination for multi-service group packages"
      },
      {
        "type": "li",
        "text": "Visa application tracker per-applicant status from application through approval"
      },
      {
        "type": "li",
        "text": "Travel teams department structure with role-based, record-level access"
      },
      {
        "type": "li",
        "text": "Document management passports, visas, vouchers and proposals attached at lead, project and task level"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "The brief was clear: build something simple enough for a team transitioning from Google Sheets, but powerful enough to manage the full complexity of a multi-service travel operation."
      },
      {
        "type": "h4",
        "text": "1. Process discovery and lifecycle mapping"
      },
      {
        "type": "p",
        "text": "Jupical held working sessions with ticketing, visa, operations and management to walk through the complete inquiry lifecycle from first contact through quotation, costing, service delivery and final billing."
      },
      {
        "type": "p",
        "text": "This mapping surfaced exactly where information was being lost between WhatsApp threads, phone calls and spreadsheet versions, and shaped the structure of every module that followed."
      },
      {
        "type": "h4",
        "text": "2. Solution design around the real workflow"
      },
      {
        "type": "p",
        "text": "Rather than configuring a standard CRM and asking the team to adapt to it, Jupical designed the lead lifecycle, billing structure and document flow around how the agency already worked."
      },
      {
        "type": "p",
        "text": "The costing process was a deliberate exception: instead of forcing the team off the spreadsheets they trusted, the design kept costing in its familiar format and connected it to the CRM through a linking mechanism rather than a replacement."
      },
      {
        "type": "h4",
        "text": "3. Travel-specific CRM configuration"
      },
      {
        "type": "p",
        "text": "Every enquiry was configured to capture destination, travel dates, passenger count, client category and service type, moving through a six-stage pipeline: New Lead, Responded, Quote Sent, Negotiation, Deal Won, Deal Lost."
      },
      {
        "type": "p",
        "text": "A system rule was built in so that a deal cannot be marked Won without a billing entry or quotation already existing against it, closing a gap where deals were previously won on paper before the commercial detail was recorded."
      },
      {
        "type": "h4",
        "text": "4. Custom development for service-wise billing"
      },
      {
        "type": "p",
        "text": "Jupical built a dedicated billing form for each service line air tickets, visa, hotels, transfers, cruise, insurance, forex and passport renewal each carrying the fields specific to that service, such as PNR for tickets, policy start date for insurance, and sailing date for cruises."
      },
      {
        "type": "p",
        "text": "Every entry moves through a consistent status sequence, Draft through Submitted, Pending and Completed or Refunded, and stays linked back to its originating lead with a full audit trail."
      },
      {
        "type": "h4",
        "text": "5. Package costing links and the visa tracker"
      },
      {
        "type": "p",
        "text": "An external links feature was added directly to the lead record, so each costing sheet version labelled and dated could be attached without moving the costing work itself out of spreadsheets."
      },
      {
        "type": "p",
        "text": "In parallel, a visa application tracker was built to record application date, expected date, travel date, destination and per-applicant status, with applications creatable from either a lead or a project task and applicant details auto-filled from the lead."
      },
      {
        "type": "h4",
        "text": "6. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed complete enquiries rather than individual screens."
      },
      {
        "type": "p",
        "text": "Scenarios traced a full cycle enquiry capture, CRM progression, costing sheet linking, service-wise billing, visa tracking through to approval, and final invoicing confirming that every record stayed connected to the lead it belonged to. Key users from ticketing, visa and operations took part in acceptance testing."
      },
      {
        "type": "h4",
        "text": "7. Training and adoption"
      },
      {
        "type": "p",
        "text": "Because the system followed the team's existing workflow rather than replacing it, training focused on where information now lived rather than on relearning the process itself."
      },
      {
        "type": "p",
        "text": "Department teams were trained on their specific billing forms and record-level access, while management was trained on the real-time reporting the platform now made available."
      },
      {
        "type": "h4",
        "text": "8. Go-live and a scalable foundation"
      },
      {
        "type": "p",
        "text": "Jupical supported the client through go-live, monitoring live usage and refining forms, stages and access rules as real enquiries moved through the system."
      },
      {
        "type": "p",
        "text": "Built on Odoo Community, the platform can extend to new service lines, departments and users as the agency grows, with the client retaining full ownership and no licensing constraints on expansion."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Travel-Specific CRM with Lead Lifecycle Every inquiry becomes a lead with destination, travel dates, passenger count, client category (Silver/Gold/Platinum) and service type, moving through a 6-stage pipeline: New Lead, Responded, Quote Sent, Negotiation, Deal Won, Deal Lost. The system enforces that billing or a quotation exists before a deal can be marked Won.",
        "cells": [
          "Travel-Specific CRM with Lead Lifecycle",
          "Every inquiry becomes a lead with destination, travel dates, passenger count, client category (Silver/Gold/Platinum) and service type, moving through a 6-stage pipeline: New Lead, Responded, Quote Sent, Negotiation, Deal Won, Deal Lost. The system enforces that billing or a quotation exists before a deal can be marked Won."
        ]
      },
      {
        "type": "tr",
        "text": "Service-Wise Billing Forms Each service air tickets, visa, hotels, transfers, cruise, insurance, forex, passport renewal has a dedicated billing form with service-specific fields (PNR for tickets, policy start date for insurance, sailing date for cruises, currency type for forex). Every entry is sequenced through Draft → Submitted → Pending → Completed/Refunded, linked back to the lead with a full audit trail.",
        "cells": [
          "Service-Wise Billing Forms",
          "Each service air tickets, visa, hotels, transfers, cruise, insurance, forex, passport renewal has a dedicated billing form with service-specific fields (PNR for tickets, policy start date for insurance, sailing date for cruises, currency type for forex). Every entry is sequenced through Draft → Submitted → Pending → Completed/Refunded, linked back to the lead with a full audit trail."
        ]
      },
      {
        "type": "tr",
        "text": "Package Costing Sheets with External Link Tracking Rather than forcing the team off spreadsheets, an external links feature was added directly to the lead. Each costing sheet version (e.g. S1, S2, S3) can be attached with a title and date, making the lead the central reference point while detailed costing stays in the familiar spreadsheet format.",
        "cells": [
          "Package Costing Sheets with External Link Tracking",
          "Rather than forcing the team off spreadsheets, an external links feature was added directly to the lead. Each costing sheet version (e.g. S1, S2, S3) can be attached with a title and date, making the lead the central reference point while detailed costing stays in the familiar spreadsheet format."
        ]
      },
      {
        "type": "tr",
        "text": "Visa Application Tracker Tracks every applicant individually application date, expected date, travel date, destination and per-contact status (In Process, Under Processing, Approved, Rejected). Applications can be created from both leads and project tasks, with applicant details auto-filled from the lead.",
        "cells": [
          "Visa Application Tracker",
          "Tracks every applicant individually application date, expected date, travel date, destination and per-contact status (In Process, Under Processing, Approved, Rejected). Applications can be created from both leads and project tasks, with applicant details auto-filled from the lead."
        ]
      },
      {
        "type": "tr",
        "text": "Travel Teams with Role-Based Access Structures the organization by department (Ticketing, Visa, Operations) with team leaders and members. Record-level access rules mean each team member sees only their assigned leads and tasks, while managers see everything.",
        "cells": [
          "Travel Teams with Role-Based Access",
          "Structures the organization by department (Ticketing, Visa, Operations) with team leaders and members. Record-level access rules mean each team member sees only their assigned leads and tasks, while managers see everything."
        ]
      },
      {
        "type": "tr",
        "text": "Document Management Passport copies, visa documents, hotel vouchers, insurance policies and proposals attach at the lead, project and task level, with a document count visible in a single view per project.",
        "cells": [
          "Document Management",
          "Passport copies, visa documents, hotel vouchers, insurance policies and proposals attach at the lead, project and task level, with a document count visible in a single view per project."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Enquiries logged inconsistently across WhatsApp, phone and email with no pipeline or ownership Every inquiry tracked through a structured 6-stage CRM pipeline",
        "cells": [
          "Enquiries logged inconsistently across WhatsApp, phone and email with no pipeline or ownership",
          "Every inquiry tracked through a structured 6-stage CRM pipeline"
        ]
      },
      {
        "type": "tr",
        "text": "Billing scattered across 8 separate Excel trackers, one per service type Service-specific billing forms, sequenced and linked back to the lead with a full audit trail",
        "cells": [
          "Billing scattered across 8 separate Excel trackers, one per service type",
          "Service-specific billing forms, sequenced and linked back to the lead with a full audit trail"
        ]
      },
      {
        "type": "tr",
        "text": "Package costing spread across multiple, hard-to-trace Google Sheet versions Costing sheet versions linked directly to the opportunity as the central reference point",
        "cells": [
          "Package costing spread across multiple, hard-to-trace Google Sheet versions",
          "Costing sheet versions linked directly to the opportunity as the central reference point"
        ]
      },
      {
        "type": "tr",
        "text": "Visa coordination over WhatsApp groups with no task ownership or stage tracking Dedicated visa tracker with per-applicant status visibility",
        "cells": [
          "Visa coordination over WhatsApp groups with no task ownership or stage tracking",
          "Dedicated visa tracker with per-applicant status visibility"
        ]
      },
      {
        "type": "tr",
        "text": "Management reports assembled manually from multiple spreadsheets at month end Real-time visibility into revenue, conversion and active packages",
        "cells": [
          "Management reports assembled manually from multiple spreadsheets at month end",
          "Real-time visibility into revenue, conversion and active packages"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "The transformation wasn't about forcing the travel team to abandon the tools they already understood it was about bringing the operational workflow together in Odoo while preserving the practical spreadsheet-based costing process the team relied on."
      },
      {
        "type": "p",
        "text": "Inquiries, cost-sheet references, tasks, visa applications and billing are now connected to the relevant records, giving the team a clear operational trail from first enquiry to final billing. Leads no longer disappear between channels, billing is consistent and auditable across every service line, and visa applicants can be checked on individually rather than chased over WhatsApp."
      },
      {
        "type": "p",
        "text": "For management, revenue by employee, revenue by service type, conversion rates and active packages are now visible as they happen, rather than reconstructed by hand once a month."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical didn't configure a standard CRM and call it a travel solution. Every module from service-wise billing and the package costing link tracker to the visa tracker and travel teams was designed by first understanding exactly how a travel agency prices, manages and delivers a package."
      },
      {
        "type": "p",
        "text": "The costing sheet the team already trusted wasn't thrown out; its relevant versions were linked directly to the opportunity, so the team could keep working in the familiar spreadsheet while keeping references organized inside Odoo."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "More than delivering an ERP, Jupical helped Travenza Holidays build the operational foundation it needs to scale every lead tracked, costing references organized on the opportunity, package activities managed through tasks, and every billing entry recorded."
      },
      {
        "type": "p",
        "text": "Built on Odoo Community, the platform can extend to new service lines, destinations and departments as the business grows, without licensing constraints on users or expansion."
      }
    ]
  },
  {
    "slug": "transforming-contract-manufacturing-with-an-integrated-erp",
    "detailTitle": "Contract Manufacturing ERP with Flutter Mobile App",
    "seoDescription": "Connecting Contract Manufacturing Operations Through Web and Mobile ERP",
    "intro": "Connecting Contract Manufacturing Operations Through Web and Mobile ERP",
    "meta": [
      {
        "label": "Services",
        "value": "Customization, Consulting & Implementation"
      },
      {
        "label": "Industry",
        "value": "Contract Manufacturing"
      },
      {
        "label": "Location",
        "value": "India"
      },
      {
        "label": "Platform",
        "value": "Flutter"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is an established contract manufacturing company that produces customer-specific products based on defined specifications, bills of materials, quality standards and delivery requirements. Its operations span customer order management, material procurement, inventory, production planning, shop-floor execution, quality inspection and finished-goods dispatch."
      },
      {
        "type": "p",
        "text": "As the volume and complexity of manufacturing activities increased, the company needed a connected digital platform to replace fragmented processes and provide better operational visibility. Jupical implemented an integrated web-based ERP and Flutter mobile application, enabling office and shop-floor teams to manage their activities through one centralized system."
      },
      {
        "type": "p",
        "text": "To respect commercial confidentiality, the client’s identity and other identifiable business information have been protected under a non-disclosure agreement."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Disconnected Data and Manual Processes Customer orders, purchase requirements, inventory records and production information were maintained across spreadsheets, paper documents and separate communication channels. Employees frequently had to verify information manually before proceeding with operational activities. Duplicate data entry, inconsistent records and time-consuming coordination slowed down operations and increased the possibility of human error.",
        "cells": [
          "Disconnected Data and Manual Processes Customer orders, purchase requirements, inventory records and production information were maintained across spreadsheets, paper documents and separate communication channels. Employees frequently had to verify information manually before proceeding with operational activities.",
          "Duplicate data entry, inconsistent records and time-consuming coordination slowed down operations and increased the possibility of human error."
        ]
      },
      {
        "type": "tr",
        "text": "Complex Customer-Specific Requirements Each customer required different product specifications, bills of materials, manufacturing instructions, quality parameters and delivery conditions. Managing these variations manually made it difficult to ensure that the correct requirements were followed for every order. Incorrect materials, outdated specifications or missed instructions could result in production errors, rework, material waste and reduced customer confidence.",
        "cells": [
          "Complex Customer-Specific Requirements Each customer required different product specifications, bills of materials, manufacturing instructions, quality parameters and delivery conditions. Managing these variations manually made it difficult to ensure that the correct requirements were followed for every order.",
          "Incorrect materials, outdated specifications or missed instructions could result in production errors, rework, material waste and reduced customer confidence."
        ]
      },
      {
        "type": "tr",
        "text": "Limited Production and Material Visibility Management lacked a centralized view of material availability, manufacturing progress, completed quantities, rejections and expected completion dates. Production updates depended heavily on calls, messages and manual follow-ups with supervisors. Material shortages were identified late, production planning became reactive, and management could not respond quickly to potential delays or changing customer priorities.",
        "cells": [
          "Limited Production and Material Visibility Management lacked a centralized view of material availability, manufacturing progress, completed quantities, rejections and expected completion dates. Production updates depended heavily on calls, messages and manual follow-ups with supervisors.",
          "Material shortages were identified late, production planning became reactive, and management could not respond quickly to potential delays or changing customer priorities."
        ]
      },
      {
        "type": "tr",
        "text": "Manual Shop-Floor and Quality Reporting Production quantities, material consumption, rejection details and quality-inspection results were recorded manually. Information from the shop floor was not always available to office teams in real time. Delayed reporting affected decision-making, weakened batch traceability and made it difficult to obtain an accurate view of production and quality performance.",
        "cells": [
          "Manual Shop-Floor and Quality Reporting Production quantities, material consumption, rejection details and quality-inspection results were recorded manually. Information from the shop floor was not always available to office teams in real time.",
          "Delayed reporting affected decision-making, weakened batch traceability and made it difficult to obtain an accurate view of production and quality performance."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to implement an integrated manufacturing ERP that would connect customer orders, procurement, inventory, production, quality and dispatch through one centralized platform."
      },
      {
        "type": "p",
        "text": "The solution needed to provide a web-based ERP for planning, administration and management while enabling production, warehouse and quality teams to record operational activities through a Flutter mobile application."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Establish a single source of accurate operational information"
      },
      {
        "type": "li",
        "text": "Manage customer-specific products, specifications and bills of materials"
      },
      {
        "type": "li",
        "text": "Connect customer demand with material and production planning"
      },
      {
        "type": "li",
        "text": "Provide real-time visibility into manufacturing progress"
      },
      {
        "type": "li",
        "text": "Enable mobile reporting from the shop floor"
      },
      {
        "type": "li",
        "text": "Strengthen inventory, lot and batch traceability"
      },
      {
        "type": "li",
        "text": "Digitize quality-inspection activities"
      },
      {
        "type": "li",
        "text": "Improve coordination between office and operational teams"
      },
      {
        "type": "li",
        "text": "Reduce dependency on spreadsheets and manual records"
      },
      {
        "type": "li",
        "text": "Build a scalable digital foundation for future business growth"
      },
      {
        "type": "h2",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Jupical implemented an integrated manufacturing ERP ecosystem consisting of a centralized web platform and a Flutter mobile application. The solution connected administrative, planning and shop-floor operations through a shared source of real-time business information."
      },
      {
        "type": "p",
        "text": "The implementation covered:"
      },
      {
        "type": "li",
        "text": "Customer and contract management"
      },
      {
        "type": "li",
        "text": "Customer-specific product and specification management"
      },
      {
        "type": "li",
        "text": "Bills of materials and manufacturing workflows"
      },
      {
        "type": "li",
        "text": "Procurement and material requirement planning"
      },
      {
        "type": "li",
        "text": "Inventory, warehouse and batch management"
      },
      {
        "type": "li",
        "text": "Production planning and shop-floor execution"
      },
      {
        "type": "li",
        "text": "Digital quality inspections"
      },
      {
        "type": "li",
        "text": "Material and finished-goods traceability"
      },
      {
        "type": "li",
        "text": "Manufacturing costing and variance analysis"
      },
      {
        "type": "li",
        "text": "Finished-goods and dispatch management"
      },
      {
        "type": "li",
        "text": "Management dashboards and operational reports"
      },
      {
        "type": "li",
        "text": "Role-based web and mobile access"
      },
      {
        "type": "h2",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Jupical followed a business-first implementation approach focused on understanding the client’s manufacturing processes before configuring the technology. Rather than simply converting existing manual activities into digital forms, our team redesigned workflows to create a connected, practical and scalable manufacturing environment."
      },
      {
        "type": "h3",
        "text": "1. Process Discovery and Gap Analysis"
      },
      {
        "type": "p",
        "text": "Jupical conducted detailed discussions with stakeholders from customer management, procurement, inventory, production, quality and dispatch."
      },
      {
        "type": "p",
        "text": "The team examined existing workflows, information dependencies, approval points, operational challenges and reporting requirements. This assessment helped identify process gaps, duplicated activities, manual dependencies and opportunities for automation."
      },
      {
        "type": "h3",
        "text": "2. Solution Architecture and Workflow Design"
      },
      {
        "type": "p",
        "text": "Based on the discovery findings, Jupical designed an integrated solution covering both web and mobile users."
      },
      {
        "type": "p",
        "text": "The web ERP was structured for planning, administration, monitoring and reporting, while the Flutter mobile application was designed for operational activities performed by production, warehouse and quality teams."
      },
      {
        "type": "p",
        "text": "Customer-specific requirements, manufacturing workflows, user responsibilities and data access controls were incorporated into the solution design."
      },
      {
        "type": "h3",
        "text": "3. ERP Configuration and Custom Development"
      },
      {
        "type": "p",
        "text": "Jupical configured the core manufacturing processes and developed the required custom workflows, reports and controls."
      },
      {
        "type": "p",
        "text": "The solution connected customer orders with product specifications, material planning, procurement, production, quality inspection, finished-goods receipt and dispatch."
      },
      {
        "type": "p",
        "text": "Special attention was given to traceability, operational accuracy and the management of customer-specific manufacturing requirements."
      },
      {
        "type": "h3",
        "text": "4. Mobile-First Shop-Floor Enablement"
      },
      {
        "type": "p",
        "text": "The Flutter mobile application was designed around the daily responsibilities of shop-floor users."
      },
      {
        "type": "p",
        "text": "Production, warehouse and quality personnel were provided with simplified, role-based screens to view assigned activities, record production quantities, report material consumption, complete inspections and update operational statuses directly from mobile devices."
      },
      {
        "type": "p",
        "text": "The mobile workflows minimized data entry and enabled information to reach the centralized ERP without unnecessary delays."
      },
      {
        "type": "h3",
        "text": "5. Validation and User Acceptance Testing"
      },
      {
        "type": "p",
        "text": "Jupical tested complete end-to-end business scenarios rather than validating individual functions in isolation."
      },
      {
        "type": "p",
        "text": "Testing covered the full operational cycle—from customer order confirmation and material planning to production, quality approval, finished-goods receipt and dispatch."
      },
      {
        "type": "p",
        "text": "Key users participated in user acceptance testing to confirm that the system reflected actual business requirements and operational responsibilities."
      },
      {
        "type": "h3",
        "text": "6. Training and Change Management"
      },
      {
        "type": "p",
        "text": "Role-specific training was provided to ensure that employees understood both the system and their responsibilities within the new digital processes."
      },
      {
        "type": "p",
        "text": "Office teams received training on the web ERP, while production, warehouse and quality users were trained on relevant Flutter mobile workflows."
      },
      {
        "type": "p",
        "text": "This practical approach supported user confidence and encouraged faster system adoption."
      },
      {
        "type": "h3",
        "text": "7. Go-Live and Stabilization"
      },
      {
        "type": "p",
        "text": "Jupical supported the client throughout the go-live period, monitored system usage and addressed operational issues as they emerged."
      },
      {
        "type": "p",
        "text": "Workflows, reports and user experiences were refined during the stabilization phase to ensure that the solution performed reliably in day-to-day manufacturing operations."
      },
      {
        "type": "h3",
        "text": "8. Scalable Foundation for Future Growth"
      },
      {
        "type": "p",
        "text": "The implementation was designed as a long-term digital foundation rather than a limited departmental application."
      },
      {
        "type": "p",
        "text": "Its modular architecture allows the business to accommodate additional customers, products, users, warehouses and manufacturing processes as operational requirements evolve."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Connected Manufacturing & Business Operations Brings production tracking and core business functions onto one Odoo Enterprise platform, giving teams a shared source of truth.",
        "cells": [
          "Connected Manufacturing & Business Operations",
          "Brings production tracking and core business functions onto one Odoo Enterprise platform, giving teams a shared source of truth."
        ]
      },
      {
        "type": "tr",
        "text": "Production Visibility Structured tracking of manufacturing activity, replacing informal, department-by-department status checks.",
        "cells": [
          "Production Visibility",
          "Structured tracking of manufacturing activity, replacing informal, department-by-department status checks."
        ]
      },
      {
        "type": "h3",
        "text": "Business Transformation: Before and After Implementation"
      },
      {
        "type": "tr",
        "text": "Before Implementation After  Implementation",
        "cells": [
          "Before Implementation",
          "After  Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Customer, inventory and production information was maintained across spreadsheets, paper records and separate communication channels. A centralized web ERP provides one source of information across customer management, procurement, inventory, production, quality and dispatch.",
        "cells": [
          "Customer, inventory and production information was maintained across spreadsheets, paper records and separate communication channels.",
          "A centralized web ERP provides one source of information across customer management, procurement, inventory, production, quality and dispatch."
        ]
      },
      {
        "type": "tr",
        "text": "Customer-specific specifications and bills of materials were managed manually, increasing the risk of using incorrect or outdated information. Customer-specific products, specifications and bills of materials are maintained through structured and controlled records.",
        "cells": [
          "Customer-specific specifications and bills of materials were managed manually, increasing the risk of using incorrect or outdated information.",
          "Customer-specific products, specifications and bills of materials are maintained through structured and controlled records."
        ]
      },
      {
        "type": "tr",
        "text": "Production planning depended on manual calculations and frequent follow-ups between departments. Production requirements are connected with confirmed customer demand, material availability and planned completion dates.",
        "cells": [
          "Production planning depended on manual calculations and frequent follow-ups between departments.",
          "Production requirements are connected with confirmed customer demand, material availability and planned completion dates."
        ]
      },
      {
        "type": "tr",
        "text": "Material shortages were often identified only after production activities had been scheduled or started. Material requirements and potential shortages can be reviewed in advance, enabling more proactive procurement and production planning.",
        "cells": [
          "Material shortages were often identified only after production activities had been scheduled or started.",
          "Material requirements and potential shortages can be reviewed in advance, enabling more proactive procurement and production planning."
        ]
      },
      {
        "type": "tr",
        "text": "Shop-floor activities were recorded manually and communicated to office teams after production events occurred. Production personnel can record quantities, material consumption, rejections and operational status through the Flutter mobile application.",
        "cells": [
          "Shop-floor activities were recorded manually and communicated to office teams after production events occurred.",
          "Production personnel can record quantities, material consumption, rejections and operational status through the Flutter mobile application."
        ]
      },
      {
        "type": "tr",
        "text": "Inventory movements and material consumption were difficult to track accurately against individual manufacturing orders. Material issues, consumption, returns and finished-goods receipts are connected with the relevant manufacturing orders.",
        "cells": [
          "Inventory movements and material consumption were difficult to track accurately against individual manufacturing orders.",
          "Material issues, consumption, returns and finished-goods receipts are connected with the relevant manufacturing orders."
        ]
      },
      {
        "type": "tr",
        "text": "Tracing raw materials through production and final dispatch required significant manual effort. Lot and batch information creates connected traceability from incoming materials through manufacturing and customer delivery.",
        "cells": [
          "Tracing raw materials through production and final dispatch required significant manual effort.",
          "Lot and batch information creates connected traceability from incoming materials through manufacturing and customer delivery."
        ]
      },
      {
        "type": "h2",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "The integrated web ERP and Flutter mobile application connected customer orders, materials, production, quality and dispatch within one platform. The solution improved operational visibility, shop-floor reporting, traceability and cross-department coordination while reducing reliance on spreadsheets and manual processes."
      },
      {
        "type": "h2",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical combines manufacturing expertise, ERP consulting and mobile application development to deliver practical, scalable solutions. We work as a long-term technology partner, transforming complex operational requirements into connected digital workflows that create measurable business value."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With manufacturing and business operations connected on one platform, Baldertech has a foundation that can scale as production volumes and business complexity grow."
      }
    ]
  },
  {
    "slug": "ladder-manufacturing-erp-in-odoo",
    "detailTitle": "All Fold: ERP + Distributor Mobile App for Ladder Manufacturing",
    "seoDescription": "Connecting the factory to its distributor network.",
    "intro": "Connecting the factory to its distributor network.",
    "meta": [
      {
        "label": "Services",
        "value": "Consulting, Customisation, Implementation & Mobile App Development"
      },
      {
        "label": "Industry",
        "value": "Ladder Manufacturing"
      },
      {
        "label": "Platform",
        "value": "Odoo Community + Flutter"
      },
      {
        "label": "Users",
        "value": "30+ users acrosusers across manufacturing and distribution"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is a ladder manufacturer selling through a network of distributors, running production, inventory and distributor ordering on a customised Odoo ERP paired with a purpose-built distributor mobile app, supporting more than 30 active users across manufacturing and distribution."
      },
      {
        "type": "p",
        "text": "Ladder manufacturing is a straightforward production process built around a genuinely difficult distribution problem. Products move from the factory through a multi-tier distributor network before reaching the end customer, and each distributor's ordering, stock checking and follow-up habits were, before this implementation, running on channels phone calls, informal messages that had no connection to what the factory actually held in stock."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Disconnected distributor ordering Distributors placed orders informally, over phone calls and messages, with no direct connection to the factory's inventory or production system. Orders could be placed against stock that no longer existed, and every order required a manual round trip before the factory could confirm what was actually available.",
        "cells": [
          "Disconnected distributor ordering Distributors placed orders informally, over phone calls and messages, with no direct connection to the factory's inventory or production system.",
          "Orders could be placed against stock that no longer existed, and every order required a manual round trip before the factory could confirm what was actually available."
        ]
      },
      {
        "type": "tr",
        "text": "Limited order visibility The factory had limited real-time visibility into distributor demand, since orders arrived through informal channels rather than a shared system. Production planning relied on estimates and past patterns rather than actual incoming demand, making it harder to size production runs accurately.",
        "cells": [
          "Limited order visibility The factory had limited real-time visibility into distributor demand, since orders arrived through informal channels rather than a shared system.",
          "Production planning relied on estimates and past patterns rather than actual incoming demand, making it harder to size production runs accurately."
        ]
      },
      {
        "type": "tr",
        "text": "Manual order tracking Tracking order status between the factory and distributors relied on manual follow-up, with no shared record of where an order stood. Distributors had to call or message to check progress, and the factory spent time answering status queries that a connected system could otherwise show automatically.",
        "cells": [
          "Manual order tracking Tracking order status between the factory and distributors relied on manual follow-up, with no shared record of where an order stood.",
          "Distributors had to call or message to check progress, and the factory spent time answering status queries that a connected system could otherwise show automatically."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to extend ERP visibility from the factory floor out to the distributor network, so that distributor orders flow directly into the same system the factory runs on, without manual re-entry at either end."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Give distributors a direct way to place and track orders against live stock."
      },
      {
        "type": "li",
        "text": "Connect distributor orders to the factory's ERP without manual re-entry."
      },
      {
        "type": "li",
        "text": "Improve the factory's visibility into distributor demand for production planning."
      },
      {
        "type": "li",
        "text": "Make order status visible to both sides without phone-based follow-up"
      },
      {
        "type": "li",
        "text": "Keep the mobile experience simple enough for distributors to adopt without training overhead"
      },
      {
        "type": "li",
        "text": "Build a foundation that could extend to additional distributors as the network grows"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Jupical implemented a customised Odoo Community ERP paired with a distributor mobile app, designed as two connected pieces of one system rather than as separate tools bridged after the fact."
      },
      {
        "type": "p",
        "text": "The implementation covered:"
      },
      {
        "type": "li",
        "text": "Customised Odoo Community ERP production, inventory and sales order management for the factory"
      },
      {
        "type": "li",
        "text": "Distributor mobile app live stock checking and order placement from a distributor's phone"
      },
      {
        "type": "li",
        "text": "App-to-ERP order sync mobile orders landing directly as sales orders inside Odoo, with no manual re-entry"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "The approach treated the distributor mobile app as an extension of the ERP rather than a separate product, so that a single order, once placed, only ever exists in one place."
      },
      {
        "type": "h4",
        "text": "1. Process discovery across factory and distribution"
      },
      {
        "type": "p",
        "text": "Jupical mapped how production, inventory and distributor ordering actually worked including the informal channels distributors were using to check stock and place orders to understand exactly where the connection to the factory's system was breaking down."
      },
      {
        "type": "h4",
        "text": "2. ERP configuration for the factory"
      },
      {
        "type": "p",
        "text": "The core Odoo Community ERP was configured and customised around the factory's production and inventory workflow, establishing the live stock and order data that the distributor app would need to read from and write to."
      },
      {
        "type": "h4",
        "text": "3. Distributor mobile app design and build"
      },
      {
        "type": "p",
        "text": "A mobile app was designed around a narrow, deliberately simple job: let a distributor check what's in stock and place an order in a few taps, without needing to learn the ERP itself."
      },
      {
        "type": "h4",
        "text": "4. App-to-ERP order synchronisation"
      },
      {
        "type": "p",
        "text": "Orders placed on the distributor app were connected to land directly in the factory's Odoo Community ERP as sales orders, removing the manual re-entry step that previously sat between a distributor's order and the factory's system."
      },
      {
        "type": "h4",
        "text": "5. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed full order cycles a distributor checking stock, placing an order on the app, the order appearing in the ERP, and status updates flowing back confirming that stock, orders and status stayed consistent across both sides of the system."
      },
      {
        "type": "h4",
        "text": "6. Rollout and distributor onboarding"
      },
      {
        "type": "p",
        "text": "The app was rolled out to the distributor network alongside the factory's ERP go-live, with onboarding kept lightweight given the app's narrow, focused scope."
      },
      {
        "type": "h4",
        "text": "7. Stabilisation"
      },
      {
        "type": "p",
        "text": "Jupical monitored live usage across both the factory ERP and the distributor app, refining stock visibility, order flow and status tracking as real orders moved through the connected system."
      },
      {
        "type": "h4",
        "text": "8. Scalable foundation for growth"
      },
      {
        "type": "p",
        "text": "Built on Odoo Community with a purpose-built mobile layer, the platform can extend to additional distributors as the network grows, with the client retaining full ownership and no licensing constraints on expansion."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Distributor Mobile App Lets distributors check live stock and place orders directly from their phone, rather than relying on phone calls to the factory.",
        "cells": [
          "Distributor Mobile App",
          "Lets distributors check live stock and place orders directly from their phone, rather than relying on phone calls to the factory."
        ]
      },
      {
        "type": "tr",
        "text": "App-to-ERP Order Sync Orders placed on the distributor app land directly in the factory's Odoo Community ERP as sales orders, without manual re-entry.",
        "cells": [
          "App-to-ERP Order Sync",
          "Orders placed on the distributor app land directly in the factory's Odoo Community ERP as sales orders, without manual re-entry."
        ]
      },
      {
        "type": "tr",
        "text": "Customized Odoo Community ERP Production, inventory and sales order management configured around the factory's own workflow, providing the live data the distributor app depends on.",
        "cells": [
          "Customized Odoo Community ERP",
          "Production, inventory and sales order management configured around the factory's own workflow, providing the live data the distributor app depends on."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Distributor orders placed informally, disconnected from factory inventory Distributors order directly against live stock through the mobile app",
        "cells": [
          "Distributor orders placed informally, disconnected from factory inventory",
          "Distributors order directly against live stock through the mobile app"
        ]
      },
      {
        "type": "tr",
        "text": "Limited visibility into distributor demand Orders sync directly into the ERP, giving the factory a clearer demand signal",
        "cells": [
          "Limited visibility into distributor demand",
          "Orders sync directly into the ERP, giving the factory a clearer demand signal"
        ]
      },
      {
        "type": "tr",
        "text": "Order status tracked manually between factory and distributors Order status trackable within the connected system",
        "cells": [
          "Order status tracked manually between factory and distributors",
          "Order status trackable within the connected system"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "With a customised Odoo Community ERP and distributor mobile app connected end to end, the factory and its distributor network now operate from shared data, supporting more than 30 active users across manufacturing and distribution."
      },
      {
        "type": "p",
        "text": "Distributors place orders against stock that reflects what the factory actually holds, the factory sees demand as it arrives rather than reconstructing it from memory, and order status no longer depends on someone picking up the phone."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical brought its experience connecting factory ERP systems to distributor mobile apps a pattern built for other manufacturers with multi-tier distribution to this ladder manufacturing business, treating the mobile app as part of the ERP rather than a bolt-on integration."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With the factory and its distributor network connected on one platform, the client has a foundation that can extend to more distributors as the business grows, without licensing constraints on users or expansion."
      },
      {
        "type": "h3",
        "text": "Manufacturing Products Sold Through a Distributor Network?"
      },
      {
        "type": "p",
        "text": "Build a connected ERP and distributor mobile app shaped around your supply chain."
      }
    ]
  },
  {
    "slug": "hardware-khazana-hardware-store",
    "detailTitle": "ERP Implementation for Hardware manufacturing company in Odoo",
    "seoDescription": "Bringing a structured, easy-to-use CRM to a small retail team without a heavy custom build.",
    "intro": "Bringing a structured, easy-to-use CRM to a small retail team without a heavy custom build.",
    "meta": [
      {
        "label": "Services",
        "value": "Consulting & Implementation"
      },
      {
        "label": "Industry",
        "value": "Hardware Retail"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is a hardware retail store using standard Odoo Enterprise CRM for sales and customer management, run by a small team handling day-to-day counter sales, repeat customers and follow-ups."
      },
      {
        "type": "p",
        "text": "Small retail businesses like this one typically don't need or want a heavy, highly customised ERP. What they need is a structured way to hold onto customer information and sales activity that would otherwise live in a notebook, a memory, or a few loyal staff members' heads. A hardware store in particular tends to build its business on repeat trade contractors, tradespeople and regular household customers who come back for the same categories of product over and over which makes remembering who bought what, and when to check back in with them, a genuine commercial asset rather than a nicety."
      },
      {
        "type": "p",
        "text": "The store had never run any form of CRM before this engagement. Every customer relationship, every follow-up and every sense of which products moved fastest existed only in the heads of the staff who had been there longest which meant the business's institutional memory was only ever as durable as its current team."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Informal customer tracking Customer information and purchase history were tracked informally, held in staff memory and scattered notes rather than any central record. Repeat sales and follow-ups were harder to manage, and knowledge about a customer's history depended on whichever staff member happened to remember it.",
        "cells": [
          "Informal customer tracking Customer information and purchase history were tracked informally, held in staff memory and scattered notes rather than any central record.",
          "Repeat sales and follow-ups were harder to manage, and knowledge about a customer's history depended on whichever staff member happened to remember it."
        ]
      },
      {
        "type": "tr",
        "text": "No structured sales process Sales activity had no structured system behind it, relying on staff memory and manual notes rather than a shared record of what was happening and when. There was no consistent way to see what stage a sale or follow-up was at, making it harder to catch opportunities that needed a nudge before they went cold.",
        "cells": [
          "No structured sales process Sales activity had no structured system behind it, relying on staff memory and manual notes rather than a shared record of what was happening and when.",
          "There was no consistent way to see what stage a sale or follow-up was at, making it harder to catch opportunities that needed a nudge before they went cold."
        ]
      },
      {
        "type": "tr",
        "text": "No visibility into customer or sales patterns With no central record, there was no way to see which customers bought most often, which products they favoured, or how sales activity changed over time. Decisions about stock, outreach and staffing were made on instinct and long memory rather than on any retrievable pattern, and that knowledge left the business whenever an experienced staff member did.",
        "cells": [
          "No visibility into customer or sales patterns With no central record, there was no way to see which customers bought most often, which products they favoured, or how sales activity changed over time.",
          "Decisions about stock, outreach and staffing were made on instinct and long memory rather than on any retrievable pattern, and that knowledge left the business whenever an experienced staff member did."
        ]
      },
      {
        "type": "tr",
        "text": "Dependence on individual staff knowledge The store's entire customer relationship history lived in the heads of a handful of long-serving staff, with nothing written down anywhere shared. The business was exposed to staff turnover in a way that had nothing to do with skill a single departure could mean losing years of accumulated customer knowledge overnight.",
        "cells": [
          "Dependence on individual staff knowledge The store's entire customer relationship history lived in the heads of a handful of long-serving staff, with nothing written down anywhere shared.",
          "The business was exposed to staff turnover in a way that had nothing to do with skill a single departure could mean losing years of accumulated customer knowledge overnight."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to give the small team a structured way to manage customers and sales activity, sized to match the scale of the business rather than the scale of a typical ERP rollout."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Give the small team a structured way to track customers and sales activity."
      },
      {
        "type": "li",
        "text": "Bring consistency to follow-ups without adding administrative overhead."
      },
      {
        "type": "li",
        "text": "Replace memory-dependent processes with a shared, retrievable record"
      },
      {
        "type": "li",
        "text": "Make customer and sales history visible to the whole team, not just whoever happened to serve that customer last"
      },
      {
        "type": "li",
        "text": "Reduce the business's dependence on any one staff member's personal memory"
      },
      {
        "type": "li",
        "text": "Keep the system simple enough for a small team to adopt immediately, without formal training sessions"
      },
      {
        "type": "li",
        "text": "Leave room to add more advanced modules later, if and when the business grows into them"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Jupical implemented standard Odoo CRM, deliberately avoiding a heavy custom build in favour of a setup sized to the team's actual day-to-day needs."
      },
      {
        "type": "p",
        "text": "The implementation covered:"
      },
      {
        "type": "li",
        "text": "Customer records a shared, structured record of who the store's customers are and what they've bought"
      },
      {
        "type": "li",
        "text": "Sales activity tracking a consistent way to log and follow sales conversations from first contact through to close"
      },
      {
        "type": "li",
        "text": "Follow-up management a shared view of which customers and opportunities need a check-in, and when"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "For a business this size, the right approach was restraint: implement the standard tool well rather than build something bespoke the team would never fully use."
      },
      {
        "type": "h4",
        "text": "1. Understanding the day-to-day reality"
      },
      {
        "type": "p",
        "text": "Jupical spent time understanding how sales and customer relationships were actually being handled at the counter where information was being tracked, where it was being lost, and what a workable replacement would need to look like for a small team."
      },
      {
        "type": "p",
        "text": "This included understanding just how much of the business's customer knowledge was undocumented, and how exposed that made the store to the ordinary realities of staff turnover."
      },
      {
        "type": "h4",
        "text": "2. Choosing the right-sized solution"
      },
      {
        "type": "p",
        "text": "Rather than defaulting to a custom build, Jupical assessed the team's needs against standard Odoo CRM and confirmed that the out-of-the-box functionality, configured correctly, would meet the requirement without unnecessary complexity."
      },
      {
        "type": "p",
        "text": "The deciding factor was simple: a small team adopts a tool faster, and sticks with it longer, when it looks and feels close to something standard rather than something built especially for them."
      },
      {
        "type": "h4",
        "text": "3. CRM configuration"
      },
      {
        "type": "p",
        "text": "Standard Odoo CRM was configured for customer records, sales activity and follow-up tracking, set up around a workflow the team could pick up quickly."
      },
      {
        "type": "p",
        "text": "Fields and views were kept close to what the team would actually use at the counter, rather than exposing the full breadth of what Odoo CRM can configure the goal was a tool that felt lighter than its underlying platform, not heavier."
      },
      {
        "type": "h4",
        "text": "4. Validation with the team"
      },
      {
        "type": "p",
        "text": "The configured system was reviewed against real, everyday sales scenarios a walk-in customer, a repeat buyer, a follow-up that needed tracking to confirm it matched how the team actually works at the counter."
      },
      {
        "type": "p",
        "text": "Feedback from this stage fed directly back into the configuration, so the system that went live had already been shaped by the people who would use it daily."
      },
      {
        "type": "h4",
        "text": "5. Training and adoption"
      },
      {
        "type": "p",
        "text": "Because the system stayed close to standard Odoo CRM, training focused on the team's specific daily workflow rather than on learning an unfamiliar custom interface."
      },
      {
        "type": "p",
        "text": "Sessions were kept short and practical, walking through the exact scenarios the team would face that same week rather than a general tour of CRM features they might never use."
      },
      {
        "type": "h4",
        "text": "6. Go-live and stabilisation"
      },
      {
        "type": "p",
        "text": "Jupical supported the team through go-live and adjusted the configuration as real customer and sales data began moving through the system."
      },
      {
        "type": "p",
        "text": "Early usage surfaced a handful of small friction points fields nobody filled in, steps that felt redundant at the counter and these were trimmed away quickly rather than left to accumulate."
      },
      {
        "type": "h4",
        "text": "7. Building the habit, not just the system"
      },
      {
        "type": "p",
        "text": "A tool is only as useful as the team's habit of using it, so particular attention was paid in the first weeks to making sure every sale and every customer interaction actually made it into the system, rather than reverting to memory under the pressure of a busy counter."
      },
      {
        "type": "h4",
        "text": "7. Room to grow"
      },
      {
        "type": "p",
        "text": "The implementation was scoped to today's needs, but built on a platform that can absorb more advanced modules inventory, point of sale, purchasing as and when the business is ready for them."
      },
      {
        "type": "p",
        "text": "Nothing about the current setup needs to be undone or rebuilt to add those modules later; they sit on the same Odoo foundation already in place."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Standard CRM Setup Gives the team a structured system for tracking customers and sales activity, sized appropriately for a small retail operation rather than over-built for it.",
        "cells": [
          "Standard CRM Setup",
          "Gives the team a structured system for tracking customers and sales activity, sized appropriately for a small retail operation rather than over-built for it."
        ]
      },
      {
        "type": "tr",
        "text": "Shared customer history Puts customer purchase history and contact details in one place the whole team can see, rather than in the memory of whichever staff member served them last.",
        "cells": [
          "Shared customer history",
          "Puts customer purchase history and contact details in one place the whole team can see, rather than in the memory of whichever staff member served them last."
        ]
      },
      {
        "type": "tr",
        "text": "Follow-up visibility Gives the team a shared view of which customers and opportunities are due a check-in, so follow-ups happen by design rather than by whoever happens to remember.",
        "cells": [
          "Follow-up visibility",
          "Gives the team a shared view of which customers and opportunities are due a check-in, so follow-ups happen by design rather than by whoever happens to remember."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Customer information tracked informally, relying on memory and notes Customer information tracked in a structured CRM",
        "cells": [
          "Customer information tracked informally, relying on memory and notes",
          "Customer information tracked in a structured CRM"
        ]
      },
      {
        "type": "tr",
        "text": "Sales activity managed without a consistent system Sales activity managed through a standard, easy-to-use CRM",
        "cells": [
          "Sales activity managed without a consistent system",
          "Sales activity managed through a standard, easy-to-use CRM"
        ]
      },
      {
        "type": "tr",
        "text": "Customer and sales knowledge lived in individual staff members' memory. Customer and sales history is visible to the whole team, in one shared system.",
        "cells": [
          "Customer and sales knowledge lived in individual staff members' memory.",
          "Customer and sales history is visible to the whole team, in one shared system."
        ]
      },
      {
        "type": "tr",
        "text": "The business was exposed to knowledge loss whenever an experienced staff member left. Customer relationship history is retained in the system regardless of staff changes.",
        "cells": [
          "The business was exposed to knowledge loss whenever an experienced staff member left.",
          "Customer relationship history is retained in the system regardless of staff changes."
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "With standard Odoo Enterprise CRM in place, the store's small team now manages sales and customer relationships more efficiently, working from a single shared system instead of memory and scattered notes."
      },
      {
        "type": "p",
        "text": "Follow-ups are easier to stay on top of, customer history is retrievable rather than dependent on who happens to remember it, and the store's accumulated customer knowledge is no longer tied to any one person's continued presence behind the counter."
      },
      {
        "type": "p",
        "text": "Just as importantly, the team gained this without taking on a system heavier than the business needed. The CRM fits the way the store already operates, which is a large part of why it was adopted quickly rather than left half-used."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Rather than over-building for a small team, Jupical implemented a standard CRM sized to the store's actual needs, giving them structure without unnecessary complexity or a project scope the business didn't require."
      },
      {
        "type": "p",
        "text": "That restraint is itself a form of expertise recognising when the right answer is a lighter-touch implementation, not a bigger one, and configuring standard tools carefully enough that they feel purpose-built even though they aren't."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With a standard CRM in place, the store has room to grow into more advanced modules as the business scales, without needing to start over on a different platform. Inventory, point of sale and purchasing can all be layered onto the same Odoo foundation when the business is ready, rather than requiring a fresh implementation from scratch."
      }
    ]
  },
  {
    "slug": "fmcg-manufacturing-erp-in-odoo",
    "detailTitle": "One Order, Zero Guesswork: B2B Supply Chain Platform",
    "seoDescription": "No More Middleman Calls.",
    "intro": "No More Middleman Calls.",
    "meta": [
      {
        "label": "Industry",
        "value": "Manufacturing & B2B Distribution"
      },
      {
        "label": "Platform",
        "value": "Odoo ERP + Custom Mobile App"
      },
      {
        "label": "Services",
        "value": "Consulting, Customisation, Implementation & flutter"
      },
      {
        "label": "Users",
        "value": "30+ users"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is a manufacturing business that sells through a network of regional distributors, who in turn supply local shops. Running that chain had always depended on relationships and manual coordination phone calls, WhatsApp texts and paper registers between the factory, its distributors and the shops they served."
      },
      {
        "type": "p",
        "text": "As the business scaled, that relationship-driven process, never built to scale, started to show its limits. Jupical was brought in to bring the chain online without forcing the factory to abandon the ERP workflows it already relied on."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "No visibility into real demand The factory had no reliable way to see what distributors actually needed, since orders arrived informally through calls and messages rather than a shared system. Production planning swung between overproduction and shortages, because there was no accurate signal of real downstream demand to plan against.",
        "cells": [
          "No visibility into real demand The factory had no reliable way to see what distributors actually needed, since orders arrived informally through calls and messages rather than a shared system.",
          "Production planning swung between overproduction and shortages, because there was no accurate signal of real downstream demand to plan against."
        ]
      },
      {
        "type": "tr",
        "text": "No reorder prompts for distributors Distributors had no system tracking their own stock levels or prompting them before supply ran low. Distributors were caught off guard by their own stockouts, with no early warning before it was too late to reorder in time.",
        "cells": [
          "No reorder prompts for distributors Distributors had no system tracking their own stock levels or prompting them before supply ran low.",
          "Distributors were caught off guard by their own stockouts, with no early warning before it was too late to reorder in time."
        ]
      },
      {
        "type": "tr",
        "text": "Nothing was traceable Orders placed by phone or WhatsApp left no structured record, so there was no way to confirm what had actually been requested and when. Orders were duplicated, lost, or simply forgotten in the back-and-forth, with disputes impossible to resolve without someone's memory of the call.",
        "cells": [
          "Nothing was traceable Orders placed by phone or WhatsApp left no structured record, so there was no way to confirm what had actually been requested and when.",
          "Orders were duplicated, lost, or simply forgotten in the back-and-forth, with disputes impossible to resolve without someone's memory of the call."
        ]
      },
      {
        "type": "tr",
        "text": "Manual payment and invoice reconciliation Payments and invoices across every distributor were reconciled by hand, cross-checked against scattered notes and paper registers. Month-end turned into a manual audit exercise, consuming staff time that could otherwise go toward running the business.",
        "cells": [
          "Manual payment and invoice reconciliation Payments and invoices across every distributor were reconciled by hand, cross-checked against scattered notes and paper registers.",
          "Month-end turned into a manual audit exercise, consuming staff time that could otherwise go toward running the business."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "li",
        "text": "Give the factory real visibility into distributor demand to plan production accurately."
      },
      {
        "type": "li",
        "text": "Let distributors order and reorder from their phone, without depending on a phone call to the factory."
      },
      {
        "type": "li",
        "text": "Make every order traceable end to end, from placement to delivery to payment."
      },
      {
        "type": "li",
        "text": "Extend the same structure downstream, so distributors can manage their own resale business with local shops."
      },
      {
        "type": "li",
        "text": "Do all of this without replacing the ERP the factory already relied on."
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "li",
        "text": "Odoo ERP for the factory product, stock and warehouse management"
      },
      {
        "type": "li",
        "text": "Distributor mobile app live stock browsing and ordering from a phone"
      },
      {
        "type": "li",
        "text": "Live order pipeline app-to-ERP sync, with orders landing as standard sales orders"
      },
      {
        "type": "li",
        "text": "Distributor resale management shop customers, pricing and invoicing"
      },
      {
        "type": "li",
        "text": "Order status tracking and preordering a shared, real-time record of where every order stands"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Rather than bolt a generic ordering app onto the factory's operations, Jupical built two purpose-fit pieces sharing one source of truth: an Odoo-based ERP for the factory, and a mobile app for distributors wired together so an order placed on a distributor's phone lands in the factory's ERP as a standard sales order, with no re-entry, no phone call and no ambiguity about what was actually asked for."
      },
      {
        "type": "h4",
        "text": "1. Mapping the chain end to end"
      },
      {
        "type": "p",
        "text": "Jupical traced the full path an order took in practice from a distributor's phone call, through the factory's informal confirmation process, to the eventual delivery and, much later, reconciliation to understand exactly where trust was standing in for a system."
      },
      {
        "type": "h4",
        "text": "2. Designing two connected pieces, not one bolted-on app"
      },
      {
        "type": "p",
        "text": "Rather than layering a generic ordering app over the factory's existing ERP, Jupical designed the ERP side and the distributor app side together, around a single shared source of truth, so an order only ever exists in one place regardless of which side it was placed from."
      },
      {
        "type": "h4",
        "text": "3. Factory-side ERP configuration"
      },
      {
        "type": "p",
        "text": "Product, stock and warehouse management were configured in Odoo to give the factory's admin team the same tools they already understood, now connected to a live order pipeline instead of a phone line."
      },
      {
        "type": "h4",
        "text": "4. Distributor mobile app design and build"
      },
      {
        "type": "p",
        "text": "The distributor app was designed around how a distributor actually works day to day checking stock, placing quick orders, and managing their own resale business all from a phone, with guardrails against ordering more than what's available or less than the minimum order quantity."
      },
      {
        "type": "h4",
        "text": "5. App-to-ERP order synchronisation"
      },
      {
        "type": "p",
        "text": "Orders placed on a distributor's phone were connected to land directly in the factory's ERP as standard sales orders, removing the re-entry step and the ambiguity that came with a phone or WhatsApp order."
      },
      {
        "type": "h4",
        "text": "6. Downstream resale and status tracking"
      },
      {
        "type": "p",
        "text": "The same structure was extended one layer further, giving distributors the tools to manage their own shop customers, resale pricing and invoicing, while every order  on either side of the chain carried a distributor-specific reference and a real-time status."
      },
      {
        "type": "h4",
        "text": "7. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed complete order cycles a distributor checking stock, placing an order, the order landing in the factory's ERP, delivery, and reconciliation against payment confirming that stock, orders and status stayed consistent across both sides of the platform. Factory admin staff and a sample of distributors took part in acceptance testing."
      },
      {
        "type": "h3",
        "text": "8. Rollout, stabilisation and a scalable foundation"
      },
      {
        "type": "p",
        "text": "Jupical supported the rollout across the factory and its distributor network, refining stock visibility, order flow and reconciliation as real orders moved through the system. Built on Odoo with a purpose-built mobile layer, the platform can extend to more distributors and shops as the network grows, with the factory retaining full ownership of the system it already knew."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Factory-Side Odoo ERP Integration The admin sees every distributor's order arrive automatically, with full visibility into who's ordering what, how often, and from which warehouse. Deliveries, invoicing and payment tracking all happen inside the same Odoo workflows the team already ran.",
        "cells": [
          "Factory-Side Odoo ERP Integration",
          "The admin sees every distributor's order arrive automatically, with full visibility into who's ordering what, how often, and from which warehouse. Deliveries, invoicing and payment tracking all happen inside the same Odoo workflows the team already ran."
        ]
      },
      {
        "type": "tr",
        "text": "Distributor Oversight View Admins can step into a distributor's own downstream business their shop customers, resale orders and invoicing from a dedicated view, giving the factory oversight all the way to the last mile.",
        "cells": [
          "Distributor Oversight View",
          "Admins can step into a distributor's own downstream business their shop customers, resale orders and invoicing from a dedicated view, giving the factory oversight all the way to the last mile."
        ]
      },
      {
        "type": "tr",
        "text": "Distributor Mobile Ordering Distributors browse live stock filtered to their nearest warehouse, add products to a cart, and check out with built-in guardrails against ordering more than what's available or less than the minimum order quantity.",
        "cells": [
          "Distributor Mobile Ordering",
          "Distributors browse live stock filtered to their nearest warehouse, add products to a cart, and check out with built-in guardrails against ordering more than what's available or less than the minimum order quantity."
        ]
      },
      {
        "type": "tr",
        "text": "Personal Low-Stock Threshold Nudges the distributor to reorder before they run out, rather than finding out the hard way. Confirming a delivery updates their stock automatically.",
        "cells": [
          "Personal Low-Stock Threshold",
          "Nudges the distributor to reorder before they run out, rather than finding out the hard way. Confirming a delivery updates their stock automatically."
        ]
      },
      {
        "type": "tr",
        "text": "Downstream Resale Management Extends the same structure to a distributor's own shop customers letting them add shop customers, set resale pricing, place orders on shops' behalf, and track what's owed.",
        "cells": [
          "Downstream Resale Management",
          "Extends the same structure to a distributor's own shop customers letting them add shop customers, set resale pricing, place orders on shops' behalf, and track what's owed."
        ]
      },
      {
        "type": "tr",
        "text": "Distributor-Specific Order References & Status Tracking Every order carries a clean, distributor-specific reference number and a real-time status (pending, accepted, delivered, invoiced, paid), replacing the \"Did you get my order?\" phone call with a screen anyone can check. Items needing lead time can still be preordered, so a temporary stockout doesn't stall the relationship.",
        "cells": [
          "Distributor-Specific Order References & Status Tracking",
          "Every order carries a clean, distributor-specific reference number and a real-time status (pending, accepted, delivered, invoiced, paid), replacing the \"Did you get my order?\" phone call with a screen anyone can check. Items needing lead time can still be preordered, so a temporary stockout doesn't stall the relationship."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Orders placed by phone call or WhatsApp, confirmed by callback Orders placed in-app, landing directly in the factory's ERP as sales orders",
        "cells": [
          "Orders placed by phone call or WhatsApp, confirmed by callback",
          "Orders placed in-app, landing directly in the factory's ERP as sales orders"
        ]
      },
      {
        "type": "tr",
        "text": "Distributors discover stockouts only after running out Personal low-stock thresholds prompt distributors to reorder in advance.",
        "cells": [
          "Distributors discover stockouts only after running out",
          "Personal low-stock thresholds prompt distributors to reorder in advance."
        ]
      },
      {
        "type": "tr",
        "text": "Deliveries to shops logged by hand, if logged at all Confirming a delivery updates distributor stock automatically.",
        "cells": [
          "Deliveries to shops logged by hand, if logged at all",
          "Confirming a delivery updates distributor stock automatically."
        ]
      },
      {
        "type": "tr",
        "text": "Orders duplicated, lost, or forgotten in back-and-forth calls and texts Every order carries a distributor-specific reference and real-time status",
        "cells": [
          "Orders duplicated, lost, or forgotten in back-and-forth calls and texts",
          "Every order carries a distributor-specific reference and real-time status"
        ]
      },
      {
        "type": "tr",
        "text": "Payments and invoices reconciled by hand at month-end Reconciliation is a matter of checking a status column",
        "cells": [
          "Payments and invoices reconciled by hand at month-end",
          "Reconciliation is a matter of checking a status column"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "What used to depend on memory, trust and whoever picked up the phone is now a system of record. The factory plans production against real demand instead of guesses. Distributors catch low stock before it becomes a problem instead of after."
      },
      {
        "type": "p",
        "text": "And reconciliation, once a manual scramble at month's end, is now just a matter of checking a status column."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "None of this required the factory to give up the ERP it already knew. Jupical extended it turning a process built on trust and phone calls into one that's trackable, auditable and self-service at every link, without bolting on a generic ordering app disconnected from how the factory actually operates."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With one connected platform spanning factory, distributor and shop, the business now has a foundation that scales with demand instead of straining against it as the distributor network grows."
      }
    ]
  },
  {
    "slug": "education-academy",
    "detailTitle": "End to End Education ERP with Customised mobile application in Odoo",
    "seoDescription": "Bringing academy operations onto one connected platform.",
    "intro": "Bringing academy operations onto one connected platform.",
    "meta": [
      {
        "label": "Platform",
        "value": "Odoo Community 19 + Flutter"
      },
      {
        "label": "Industry",
        "value": "Education / Academy"
      },
      {
        "label": "Services",
        "value": "Customisation, Consulting, Implementation & Flutter"
      },
      {
        "label": "Users",
        "value": "100 +users"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is an academy running CRM and Education Management on Odoo Community 19, paired with a mobile app, supporting more than 30 active users across enrollment, teaching and administrative staff."
      },
      {
        "type": "p",
        "text": "Academies sit at an unusual intersection: part sales operation, chasing and converting prospective student inquiries, and part ongoing service operation, running courses, tracking attendance and maintaining academic records for everyone already enrolled. Most software is built for one side of that or the other, not both which is exactly where this academy's previous setup was falling short."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Disconnected lead and student management Prospective student inquiries and enrolled student records were managed as two separate systems with no link between them. It was difficult to track a student's full journey from first inquiry through to active enrollment, and inquiry data was effectively lost the moment a student enrolled.",
        "cells": [
          "Disconnected lead and student management Prospective student inquiries and enrolled student records were managed as two separate systems with no link between them.",
          "It was difficult to track a student's full journey from first inquiry through to active enrollment, and inquiry data was effectively lost the moment a student enrolled."
        ]
      },
      {
        "type": "tr",
        "text": "Manual course and attendance tracking Course schedules, attendance and academic records were tracked manually, without any central system holding them together. Administrative workload increased with every new course or intake, and cross-checking a student's academic record meant piecing it together from several places.",
        "cells": [
          "Manual course and attendance tracking Course schedules, attendance and academic records were tracked manually, without any central system holding them together.",
          "Administrative workload increased with every new course or intake, and cross-checking a student's academic record meant piecing it together from several places."
        ]
      },
      {
        "type": "tr",
        "text": "Staff and students had no way to access academy information outside a desktop system. Information that should have been available on the move a class schedule, an attendance record, a quick lead update required staff to be at a desk, slowing down day-to-day operations.",
        "cells": [
          "Staff and students had no way to access academy information outside a desktop system.",
          "Information that should have been available on the move a class schedule, an attendance record, a quick lead update required staff to be at a desk, slowing down day-to-day operations."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to bring lead management and day-to-day academy operations onto one connected platform, so the academy could see a student's full journey rather than two disconnected halves of it."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Track prospective and enrolled students on one connected system from first inquiry onward."
      },
      {
        "type": "li",
        "text": "Bring structure to course, attendance and academic record management."
      },
      {
        "type": "li",
        "text": "Give staff and students mobile access to academy information."
      },
      {
        "type": "li",
        "text": "Remove the manual administrative work that grew heavier with every new intake"
      },
      {
        "type": "li",
        "text": "Establish a system that could scale as enrollment grows"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Jupical implemented an Odoo Community 19 ERP, bringing CRM and Education Management together with a mobile app, rather than treating lead tracking and academy operations as two separate systems."
      },
      {
        "type": "p",
        "text": "The implementation covered:"
      },
      {
        "type": "li",
        "text": "CRM structured tracking of prospective student inquiries through to enrollment"
      },
      {
        "type": "li",
        "text": "Education Management course, attendance and academic record management in one system"
      },
      {
        "type": "li",
        "text": "Mobile App access to academy information for staff and students on the move"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "The guiding idea was that a prospective student and an enrolled student are the same person at two different stages of the same relationship, and the system needed to reflect that rather than draw a hard line between them."
      },
      {
        "type": "h4",
        "text": "1. Process discovery across enrollment and academics"
      },
      {
        "type": "p",
        "text": "Jupical mapped how inquiries were currently handled, how they were converted into enrollments, and how course, attendance and academic records were maintained once a student was active to see exactly where the handoff between \"prospect\" and \"student\" was breaking the record trail."
      },
      {
        "type": "h4",
        "text": "2. Solution design around one continuous student journey"
      },
      {
        "type": "p",
        "text": "Rather than configuring CRM and Education Management as separate modules bridged after the fact, Jupical designed them to share the same underlying student record, so a lead converts into a student without losing its history."
      },
      {
        "type": "h4",
        "text": "3. CRM configuration for student enquiries"
      },
      {
        "type": "p",
        "text": "The CRM was configured specifically around the academy's inquiry-to-enrollment process, replacing informal, disconnected lead tracking with a structured pipeline any staff member could follow."
      },
      {
        "type": "h4",
        "text": "4. Education Management configuration"
      },
      {
        "type": "p",
        "text": "Course schedules, attendance and academic records were brought into Education Management, giving the academy one place to manage everything that had previously been tracked by hand."
      },
      {
        "type": "h4",
        "text": "5. Mobile app design and build"
      },
      {
        "type": "p",
        "text": "A mobile app was built to extend access to both staff and students, so academy information didn't remain locked to a desktop system during the parts of the day when it mattered most."
      },
      {
        "type": "h4",
        "text": "6. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed a full student journey inquiry, follow-up, enrollment, course assignment, attendance tracking confirming that a student's record stayed connected and complete at every stage. Key users from enrollment, teaching and administrative staff took part in acceptance testing."
      },
      {
        "type": "h4",
        "text": "7. Training and adoption"
      },
      {
        "type": "p",
        "text": "Enrollment staff were trained on the CRM pipeline, teaching and administrative staff on Education Management, and both groups, along with students, on the mobile app."
      },
      {
        "type": "h4",
        "text": "8. Go-live and a scalable foundation"
      },
      {
        "type": "p",
        "text": "Jupical supported the academy through go-live and monitored usage as real inquiries, enrollments and academic records moved through the system. Built on Odoo Community, the platform can scale as enrollment grows, with the academy retaining full ownership and no licensing constraints on expansion."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "CRM for Student Enquiries Tracks prospective students from first inquiry through enrollment, replacing informal, disconnected lead tracking.",
        "cells": [
          "CRM for Student Enquiries",
          "Tracks prospective students from first inquiry through enrollment, replacing informal, disconnected lead tracking."
        ]
      },
      {
        "type": "tr",
        "text": "Education Management Brings course, attendance and academic record management into one connected system.",
        "cells": [
          "Education Management",
          "Brings course, attendance and academic record management into one connected system."
        ]
      },
      {
        "type": "tr",
        "text": "Mobile App Access Gives staff and students access to academy information from their phones.",
        "cells": [
          "Mobile App Access",
          "Gives staff and students access to academy information from their phones."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After Implementation"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Prospective and enrolled student data managed separately CRM and Education Management connected on one platform",
        "cells": [
          "Prospective and enrolled student data managed separately",
          "CRM and Education Management connected on one platform"
        ]
      },
      {
        "type": "tr",
        "text": "Course and attendance tracked manually Structured course and attendance tracking within the ERP",
        "cells": [
          "Course and attendance tracked manually",
          "Structured course and attendance tracking within the ERP"
        ]
      },
      {
        "type": "tr",
        "text": "No mobile access for staff or students Mobile app gives staff and students access on the go",
        "cells": [
          "No mobile access for staff or students",
          "Mobile app gives staff and students access on the go"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "With CRM, Education Management and a mobile app connected on Odoo 19, the academy now runs its operations from one platform, supporting more than 30 active users."
      },
      {
        "type": "p",
        "text": "A student's journey from first inquiry through enrollment, courses and attendance now lives in a single connected record instead of two disconnected systems, and staff and students can reach academy information from their phones rather than being tied to a desktop."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical brought its Education ERP implementation experience to this project, connecting lead management with day-to-day academy operations rather than treating them as separate systems that happened to sit next to each other."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With CRM, course management and mobile access connected on one platform, the academy has a foundation that can scale as enrollment grows, without licensing constraints on users or expansion."
      }
    ]
  },
  {
    "slug": "brass-parts-manufacturer",
    "detailTitle": "Brass Manufacturing ERP Implementation in Odoo.",
    "seoDescription": "A smarter way to manage weight-based inventory, returns, rejections, and stock reporting.",
    "intro": "A smarter way to manage weight-based inventory, returns, rejections, and stock reporting.",
    "meta": [
      {
        "label": "Platform",
        "value": "Odoo 19"
      },
      {
        "label": "Industry",
        "value": "Brass & Metal Manufacturing"
      },
      {
        "label": "Services",
        "value": "Customisation, Consulting & Implementation"
      },
      {
        "label": "Users",
        "value": "50+ users"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is a long-established brass and metal manufacturer producing a large catalogue of precision-engineered components and serving customers across multiple international markets."
      },
      {
        "type": "p",
        "text": "As the business grew, managing stock movements, weight calculations, rejections, returns and reporting became increasingly complex. The challenge was not simply to implement an ERP it was to build an inventory system that understood how brass manufacturing actually works, where every movement of goods is a weight problem before it is a counting problem."
      },
      {
        "type": "p",
        "text": "Brass and metal manufacturing has a structural quirk that most inventory software never anticipates: goods move in bags, bags have their own weight, gross weight has to be reduced by a deduction percentage before it means anything, and a portion of every batch can be rejected and needs tracking separately from what shipped. None of that is exotic to someone who has run a metal manufacturing floor but it is exactly the kind of domain-specific arithmetic that generic inventory modules assume away."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Manual weight calculations Bag weights, deductions, gross weight, rejection quantity and net quantity all required manual calculation at every stock movement, with no system enforcing consistency. Every calculation carried its own risk of error, and the more movements the business processed, the more that risk compounded across the day.",
        "cells": [
          "Manual weight calculations Bag weights, deductions, gross weight, rejection quantity and net quantity all required manual calculation at every stock movement, with no system enforcing consistency.",
          "Every calculation carried its own risk of error, and the more movements the business processed, the more that risk compounded across the day."
        ]
      },
      {
        "type": "tr",
        "text": "Difficult rejection tracking Rejected quantities were recorded separately from the deliveries they belonged to, with no structural link between the two. Reconciling a rejection back to its original delivery required manual cross-referencing, making the true picture of rejection rates hard to see at a glance.",
        "cells": [
          "Difficult rejection tracking Rejected quantities were recorded separately from the deliveries they belonged to, with no structural link between the two.",
          "Reconciling a rejection back to its original delivery required manual cross-referencing, making the true picture of rejection rates hard to see at a glance."
        ]
      },
      {
        "type": "tr",
        "text": "Disconnected return tracking Returns were not automatically linked to the original delivery they related to, so identifying outstanding quantities required manual cross-checking. It was easy to lose track of exactly how much of an original delivery remained outstanding once partial returns started coming back.",
        "cells": [
          "Disconnected return tracking Returns were not automatically linked to the original delivery they related to, so identifying outstanding quantities required manual cross-checking.",
          "It was easy to lose track of exactly how much of an original delivery remained outstanding once partial returns started coming back."
        ]
      },
      {
        "type": "tr",
        "text": "Limited stock reporting Customer-wise, product-wise and monthly stock reports required manual data collection and compilation in Excel. Reporting consumed staff time that scaled directly with the size of the business, and reports were only ever as current as the last manual compilation.",
        "cells": [
          "Limited stock reporting Customer-wise, product-wise and monthly stock reports required manual data collection and compilation in Excel.",
          "Reporting consumed staff time that scaled directly with the size of the business, and reports were only ever as current as the last manual compilation."
        ]
      },
      {
        "type": "tr",
        "text": "Inadequate delivery documents Standard Odoo delivery slips did not capture the specific weight, deduction, rejection and net quantity details the business needed to record. Delivery documentation didn't match the level of detail the business actually needed to track, leaving gaps between what shipped and what the paperwork proved.",
        "cells": [
          "Inadequate delivery documents Standard Odoo delivery slips did not capture the specific weight, deduction, rejection and net quantity details the business needed to record.",
          "Delivery documentation didn't match the level of detail the business actually needed to track, leaving gaps between what shipped and what the paperwork proved."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to build an inventory system around the specific arithmetic of brass manufacturing, rather than adapting the business to a generic inventory module that assumed those calculations away."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Capture the right data at every stock movement, without relying on manual calculation."
      },
      {
        "type": "li",
        "text": "Automate weight and net quantity calculations across bag weight, deductions and rejections."
      },
      {
        "type": "li",
        "text": "Connect returns automatically to their original deliveries to surface outstanding quantities."
      },
      {
        "type": "li",
        "text": "Generate delivery documentation that reflects the actual data the business tracks."
      },
      {
        "type": "li",
        "text": "Make customer-wise, product-wise and monthly reporting available directly from Odoo."
      },
      {
        "type": "li",
        "text": "Reduce the time reporting took, independent of how large the business grew"
      },
      {
        "type": "li",
        "text": "Build an inventory foundation able to scale with an expanding international customer base"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Jupical extended Odoo 19 with a custom inventory solution Jupical Stock Management built specifically around this style of weight-based manufacturing, rather than configuring the standard inventory app and working around its gaps."
      },
      {
        "type": "p",
        "text": "The implementation covered:"
      },
      {
        "type": "li",
        "text": "Custom Inventory (Jupical Stock Management) the core module underpinning every other piece of the solution"
      },
      {
        "type": "li",
        "text": "Weight tracking bag weight, gross weight and deduction calculated at every movement"
      },
      {
        "type": "li",
        "text": "Rejection management rejected quantities tracked and linked back to their delivery"
      },
      {
        "type": "li",
        "text": "Return reconciliation returns connected automatically to the original delivery"
      },
      {
        "type": "li",
        "text": "Delivery receipt custom documentation capturing weight, deduction, rejection and net quantity"
      },
      {
        "type": "li",
        "text": "Stock analysis movement reports by date, customer, transaction type and product"
      },
      {
        "type": "li",
        "text": "Excel reports structured reports exported directly from Odoo"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Instead of forcing Brixton Power to change its existing operational process around a standard inventory system, Jupical extended Odoo 19 with a custom inventory solution designed around their specific manufacturing requirements. The focus was simple: capture the right data at every stock movement, automate the calculations, connect returns to their original deliveries, and make reporting available directly from Odoo."
      },
      {
        "type": "h4",
        "text": "1. Understanding the operational process in detail"
      },
      {
        "type": "p",
        "text": "Before any development began, Jupical walked the full stock movement process on the ground how bags were weighed, how deductions were applied, how rejections were recorded, and how returns eventually made their way back against an original delivery. This is what shaped Jupical Stock Management: a solution built after the process was understood, not before."
      },
      {
        "type": "h4",
        "text": "2. Designing the calculation model"
      },
      {
        "type": "p",
        "text": "Jupical mapped exactly how bag quantity, bag weight, gross weight, deduction percentage and rejection quantity needed to combine to produce a trustworthy net quantity, and built that logic directly into the movement record rather than leaving it to be calculated separately."
      },
      {
        "type": "h4",
        "text": "3. Building movement-level weight tracking"
      },
      {
        "type": "p",
        "text": "Every stock movement was extended to capture bag quantity, bag weight, gross weight, deduction percentage and rejection quantity, with net quantity calculated automatically the moment those figures were entered."
      },
      {
        "type": "h4",
        "text": "4. Connecting returns to their original deliveries"
      },
      {
        "type": "p",
        "text": "A reconciliation layer was built so that a return automatically retrieves its original delivery, aggregates any returned quantities against it, and calculates the outstanding difference removing the manual cross-checking that previously stood between a return and knowing what it actually settled."
      },
      {
        "type": "h4",
        "text": "5. Custom delivery receipts"
      },
      {
        "type": "p",
        "text": "Delivery documentation was redesigned to capture the specific weight, deduction, rejection and net quantity information the business needed, replacing the standard Odoo delivery slip with one built around this business's actual requirements."
      },
      {
        "type": "h4",
        "text": "6. Reporting and rejection analysis"
      },
      {
        "type": "p",
        "text": "Monthly transaction and product-wise movement reports were built directly into the system, alongside rejection analysis giving visibility into rejected quantities across both deliveries and returns, and Excel export was added so structured reports could leave Odoo in the format the business already worked with."
      },
      {
        "type": "h4",
        "text": "7. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed full movement cycles a delivery with weight and bag details captured, deduction calculated, rejection recorded, net quantity produced, and a subsequent return linked back to the original delivery confirming that every figure reconciled correctly end to end. Key users from inventory and dispatch took part in acceptance testing."
      },
      {
        "type": "h4",
        "text": "8. Go-live, stabilisation and a scalable foundation"
      },
      {
        "type": "p",
        "text": "Jupical supported the business through go-live and refined the calculation logic and reports as real stock movements passed through the system. Built as a custom extension on Odoo 19, the solution can scale as the product catalogue and customer base grow, with the business retaining full ownership of the platform."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Feature What It Delivers",
        "cells": [
          "Feature",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Movement-Level Weight Tracking Captures bag quantity, bag weight, gross weight, deduction percentage, rejection quantity, and automatically calculated net quantity.",
        "cells": [
          "Movement-Level Weight Tracking",
          "Captures bag quantity, bag weight, gross weight, deduction percentage, rejection quantity, and automatically calculated net quantity."
        ]
      },
      {
        "type": "tr",
        "text": "Automatic Return Reconciliation Connects returns to the original delivery, retrieves the original quantity, aggregates returned quantities, and calculates the outstanding difference.",
        "cells": [
          "Automatic Return Reconciliation",
          "Connects returns to the original delivery, retrieves the original quantity, aggregates returned quantities, and calculates the outstanding difference."
        ]
      },
      {
        "type": "tr",
        "text": "Custom Delivery Receipt Generates delivery documentation containing the specific weight, rejection, deduction and net quantity information required by the business.",
        "cells": [
          "Custom Delivery Receipt",
          "Generates delivery documentation containing the specific weight, rejection, deduction and net quantity information required by the business."
        ]
      },
      {
        "type": "tr",
        "text": "Stock Movement Analysis Generates monthly transaction and product-wise movement reports based on date, customer, transaction type and product.",
        "cells": [
          "Stock Movement Analysis",
          "Generates monthly transaction and product-wise movement reports based on date, customer, transaction type and product."
        ]
      },
      {
        "type": "tr",
        "text": "Excel Reporting Exports structured stock reports directly from Odoo, eliminating manual data compilation.",
        "cells": [
          "Excel Reporting",
          "Exports structured stock reports directly from Odoo, eliminating manual data compilation."
        ]
      },
      {
        "type": "tr",
        "text": "Rejection Analysis Provides visibility into rejected quantities across deliveries and returns for better monitoring and follow-up.",
        "cells": [
          "Rejection Analysis",
          "Provides visibility into rejected quantities across deliveries and returns for better monitoring and follow-up."
        ]
      },
      {
        "type": "h3",
        "text": "How the Workflow Now Works"
      },
      {
        "type": "p",
        "text": "Delivery → Weight & Bag Details Captured → Automatic Deduction Calculation → Rejection Recorded → Net Quantity Calculated → Return Linked to Original Delivery → Outstanding Quantity Calculated → Reports Generated Directly from Odoo."
      },
      {
        "type": "p",
        "text": "This keeps the entire inventory movement traceable without requiring the team to maintain separate calculations or trackers."
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Bag weights, deductions and net quantity calculated manually Net quantity calculated automatically at every stock movement",
        "cells": [
          "Bag weights, deductions and net quantity calculated manually",
          "Net quantity calculated automatically at every stock movement"
        ]
      },
      {
        "type": "tr",
        "text": "Rejected quantities recorded separately from deliveries Rejection quantities tracked and reconciled with the original delivery",
        "cells": [
          "Rejected quantities recorded separately from deliveries",
          "Rejection quantities tracked and reconciled with the original delivery"
        ]
      },
      {
        "type": "tr",
        "text": "Returns cross-checked manually against deliveries Returns automatically linked to the original delivery, with outstanding quantity calculated",
        "cells": [
          "Returns cross-checked manually against deliveries",
          "Returns automatically linked to the original delivery, with outstanding quantity calculated"
        ]
      },
      {
        "type": "tr",
        "text": "Customer-wise, product-wise and monthly reports built manually in Excel Structured stock reports exported directly from Odoo",
        "cells": [
          "Customer-wise, product-wise and monthly reports built manually in Excel",
          "Structured stock reports exported directly from Odoo"
        ]
      },
      {
        "type": "tr",
        "text": "Standard Odoo delivery slips missing weight and rejection detail Custom delivery receipts capturing weight, deduction, rejection and net quantity",
        "cells": [
          "Standard Odoo delivery slips missing weight and rejection detail",
          "Custom delivery receipts capturing weight, deduction, rejection and net quantity"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "The implementation transformed the way the business manages inventory operations automated net weight calculations, reporting available in minutes rather than hours, better rejection visibility, and complete delivery documentation."
      },
      {
        "type": "p",
        "text": "What used to require careful manual arithmetic at every movement now happens automatically and consistently, which matters most exactly where the business needs it most: at scale, across a large product catalogue and a wide customer base, where a small error repeated often enough stops being small."
      },
      {
        "type": "p",
        "text": "Reporting that once meant pulling data together by hand now takes minutes, freeing staff time for the parts of the operation that actually need judgment rather than arithmetic."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "This business did not need another generic inventory system. It needed an ERP solution that understood the real-world complexity of brass manufacturing, from bag weights and deductions to rejection handling, returns and net quantity calculations."
      },
      {
        "type": "p",
        "text": "Jupical approached the project by first understanding the operational process and then extending Odoo around those requirements not simply a customised ERP, but an inventory system designed to fit the business."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With weight tracking, rejection handling, return reconciliation and reporting all built into one traceable workflow, the business now has an inventory foundation that scales with its operations across an expanding international customer base."
      }
    ]
  },
  {
    "slug": "semi-public-financial-services",
    "detailTitle": "End to End Loan Application for Semi Public Entity in Malaysia in Odoo",
    "seoDescription": "Replacing Excel-based loan tracking with a purpose-built loan management system.",
    "intro": "Replacing Excel-based loan tracking with a purpose-built loan management system.",
    "meta": [
      {
        "label": "Industry",
        "value": "Loan Providing / Finance"
      },
      {
        "label": "Services",
        "value": "Consulting & Implementation"
      },
      {
        "label": "Platform",
        "value": "Odoo 18 community"
      },
      {
        "label": "Users",
        "value": "200+ users"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is a loan-providing finance company, offering products such as personal loans, business loans and mortgages to individuals and businesses."
      },
      {
        "type": "p",
        "text": "Loan servicing carries a particular kind of complexity that spreadsheets tolerate for a while and then stop tolerating all at once: every active loan has its own disbursement date, its own amortization schedule, its own sequence of installments, and its own running balance that has to reconcile exactly against the accounting ledger. That's manageable for a handful of loans. It becomes something else entirely once the portfolio grows into the hundreds or thousands."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Manual record-keeping in Excel The entire loan portfolio was tracked in spreadsheets, with no central system holding customer, loan and repayment data together. Maintaining accurate customer records became increasingly difficult as the loan portfolio grew, and small entry errors were hard to catch before they compounded.",
        "cells": [
          "Manual record-keeping in Excel The entire loan portfolio was tracked in spreadsheets, with no central system holding customer, loan and repayment data together.",
          "Maintaining accurate customer records became increasingly difficult as the loan portfolio grew, and small entry errors were hard to catch before they compounded."
        ]
      },
      {
        "type": "tr",
        "text": "Manual loan statements and invoicing Loan statements and invoices for every installment were prepared by hand, loan by loan. The process was arduous and time-consuming, and the time it took scaled directly with the number of active loans on the books.",
        "cells": [
          "Manual loan statements and invoicing Loan statements and invoices for every installment were prepared by hand, loan by loan.",
          "The process was arduous and time-consuming, and the time it took scaled directly with the number of active loans on the books."
        ]
      },
      {
        "type": "tr",
        "text": "Manual journal entry reconciliation Journal entries for each invoice had to be reconciled manually to tally the balance sheet. Reconciliation consumed significant accounting time each cycle and left more room for the kind of small discrepancy that takes hours to track down.",
        "cells": [
          "Manual journal entry reconciliation Journal entries for each invoice had to be reconciled manually to tally the balance sheet.",
          "Reconciliation consumed significant accounting time each cycle and left more room for the kind of small discrepancy that takes hours to track down."
        ]
      },
      {
        "type": "tr",
        "text": "No automated customer communication Customers had no automated tools or self-service options for accessing information, making payments, or managing their accounts. Every routine customer query — a balance check, a payment, a statement request — required direct staff time rather than being something a customer could resolve themselves.",
        "cells": [
          "No automated customer communication Customers had no automated tools or self-service options for accessing information, making payments, or managing their accounts.",
          "Every routine customer query — a balance check, a payment, a statement request — required direct staff time rather than being something a customer could resolve themselves."
        ]
      },
      {
        "type": "tr",
        "text": "Data security risk Sensitive customer and loan data was handled manually across spreadsheets rather than within a controlled system. Manual handling increased the risk of data breaches and security incidents, with no structured access control over who could see or edit what.",
        "cells": [
          "Data security risk Sensitive customer and loan data was handled manually across spreadsheets rather than within a controlled system.",
          "Manual handling increased the risk of data breaches and security incidents, with no structured access control over who could see or edit what."
        ]
      },
      {
        "type": "tr",
        "text": "No data-driven insights Without software to capture and analyse portfolio data, there was no structured way to study customer behaviour, loan performance or market trends. Decisions about lending, risk and growth were made without the benefit of the portfolio's own historical performance data.",
        "cells": [
          "No data-driven insights Without software to capture and analyse portfolio data, there was no structured way to study customer behaviour, loan performance or market trends.",
          "Decisions about lending, risk and growth were made without the benefit of the portfolio's own historical performance data."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "li",
        "text": "Organize and centralize loan data currently scattered across Excel."
      },
      {
        "type": "li",
        "text": "Automate loan disbursement, payment processing and account management."
      },
      {
        "type": "li",
        "text": "Reduce errors in loan documentation and processing through validation checks and automated calculations."
      },
      {
        "type": "li",
        "text": "Speed up loan origination, approval and servicing."
      },
      {
        "type": "li",
        "text": "Build a scalable system that can handle growing loan volumes without major infrastructure investment."
      },
      {
        "type": "li",
        "text": "Simplify accounting and invoicing for the loan business."
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "li",
        "text": "Loan origination & servicing automation disbursement, payment processing and account management handled in one system"
      },
      {
        "type": "li",
        "text": "Amortization schedule management complex loan structures and repayment schedules tracked accurately"
      },
      {
        "type": "li",
        "text": "Validation checks & automated calculations reducing errors in loan documentation and processing"
      },
      {
        "type": "li",
        "text": "Accounting & invoicing reconciliation handled within the same system rather than as a separate manual process"
      },
      {
        "type": "li",
        "text": "Scalable architecture for growing loan volumes built to handle portfolio growth without a proportional infrastructure investment"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Jupical implemented a personalized loan management software solution, built to bring order and manageability to the client's loan data. The system automated core loan servicing tasks disbursement, payment processing and account management while handling complex loan structures and amortization schedules with improved accuracy and efficiency."
      },
      {
        "type": "h4",
        "text": "1. Understanding the existing loan process"
      },
      {
        "type": "p",
        "text": "Jupical mapped the client's full loan lifecycle as it actually ran in spreadsheets origination, disbursement, the installment schedule, repayment tracking, and the manual reconciliation that tied it all back to the balance sheet to understand exactly where the Excel-based process was under strain."
      },
      {
        "type": "h4",
        "text": "2. Designing the loan data model"
      },
      {
        "type": "p",
        "text": "Rather than replicate the spreadsheet structure inside new software, Jupical designed a proper data model for loans, customers, disbursements and repayments, capable of holding the full complexity of varied loan structures and amortization schedules in one consistent system."
      },
      {
        "type": "h4",
        "text": "3. Building loan origination and servicing automation"
      },
      {
        "type": "p",
        "text": "Disbursement, payment processing and account management were automated end to end, so a loan's lifecycle from approval through every scheduled installment could be tracked and actioned inside the system rather than reconstructed from a spreadsheet each time."
      },
      {
        "type": "h4",
        "text": "4. Amortization and validation logic"
      },
      {
        "type": "p",
        "text": "Amortization schedules were built to handle complex loan structures accurately, with validation checks and automated calculations layered in to catch the kind of manual entry error that had previously gone unnoticed until reconciliation."
      },
      {
        "type": "h4",
        "text": "5. Integrating accounting and invoicing"
      },
      {
        "type": "p",
        "text": "Accounting and invoicing were built into the same system rather than left as a separate manual process, so journal entries for every invoice reconcile against the balance sheet without a dedicated manual reconciliation cycle."
      },
      {
        "type": "h4",
        "text": "6. Designing for data security"
      },
      {
        "type": "p",
        "text": "Sensitive customer and loan data was brought into a controlled system with proper access management, replacing the exposure that came with handling that data across shared spreadsheets."
      },
      {
        "type": "h4",
        "text": "7. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed full loan lifecycles origination, disbursement, scheduled installments, payment processing and reconciliation against the balance sheet confirming that figures matched at every stage. Key users from loan servicing and accounts took part in acceptance testing."
      },
      {
        "type": "h4",
        "text": "8. Go-live, stabilisation and a scalable foundation"
      },
      {
        "type": "p",
        "text": "Jupical supported the client through go-live and refined the system as real loans moved through it. The architecture was built to absorb growing loan volumes without requiring major infrastructure investment as the client's book of business expands."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Loan Servicing Automation Automates loan disbursement, payment processing and account management, handling complex loan structures and amortization schedules.",
        "cells": [
          "Loan Servicing Automation",
          "Automates loan disbursement, payment processing and account management, handling complex loan structures and amortization schedules."
        ]
      },
      {
        "type": "tr",
        "text": "Validation & Automated Calculations Minimizes errors in loan documentation and processing, improving accuracy and compliance with regulatory requirements.",
        "cells": [
          "Validation & Automated Calculations",
          "Minimizes errors in loan documentation and processing, improving accuracy and compliance with regulatory requirements."
        ]
      },
      {
        "type": "tr",
        "text": "Integrated Accounting & Invoicing Makes accounting and invoicing easy to manage directly within the system, rather than as a separate manual process.",
        "cells": [
          "Integrated Accounting & Invoicing",
          "Makes accounting and invoicing easy to manage directly within the system, rather than as a separate manual process."
        ]
      },
      {
        "type": "tr",
        "text": "Scalable Architecture Lets the client handle increasing loan volumes and accommodate business growth without significant infrastructure investment.",
        "cells": [
          "Scalable Architecture",
          "Lets the client handle increasing loan volumes and accommodate business growth without significant infrastructure investment."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Loan data managed manually in Excel Loan data organized and centrally managed in a dedicated system",
        "cells": [
          "Loan data managed manually in Excel",
          "Loan data organized and centrally managed in a dedicated system"
        ]
      },
      {
        "type": "tr",
        "text": "Loan statements and invoices prepared by hand for every installment Loan disbursement, payment processing and account management automated",
        "cells": [
          "Loan statements and invoices prepared by hand for every installment",
          "Loan disbursement, payment processing and account management automated"
        ]
      },
      {
        "type": "tr",
        "text": "Journal entries reconciled manually against the balance sheet Accounting and invoicing handled within the same system",
        "cells": [
          "Journal entries reconciled manually against the balance sheet",
          "Accounting and invoicing handled within the same system"
        ]
      },
      {
        "type": "tr",
        "text": "No automated communication or self-service for customers Faster loan origination, approval and servicing",
        "cells": [
          "No automated communication or self-service for customers",
          "Faster loan origination, approval and servicing"
        ]
      },
      {
        "type": "tr",
        "text": "No data-driven insight into customer behavior or loan performance Scalable system supporting growing loan volumes",
        "cells": [
          "No data-driven insight into customer behavior or loan performance",
          "Scalable system supporting growing loan volumes"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "Implementing loan management software delivered transformative results across the client's operations efficiency gains, reduced errors, enhanced scalability and stronger compliance management. Automation, together with easier accounting and invoicing, positioned the client to handle growth without a proportional rise in manual effort."
      },
      {
        "type": "p",
        "text": "Loan servicing that once meant maintaining a growing thicket of interlinked spreadsheets now runs through a single system that keeps disbursement, repayment and accounting consistent with each other by design, rather than by careful manual upkeep."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical built the loan management system around the client's actual day-to-day process disbursement, servicing, amortization and reconciliation rather than a generic finance module, giving the client a scalable, accurate foundation for growth."
      },
      {
        "type": "h3",
        "text": "Scalable foundation for growth"
      },
      {
        "type": "p",
        "text": "With origination, servicing, accounting and reporting connected on one platform, the client has an architecture built to absorb a growing loan portfolio without a proportional increase in manual effort or infrastructure cost."
      }
    ]
  },
  {
    "slug": "citaglobal-energy-solution-provider",
    "detailTitle": "Customised CRM, Sales, Accounting, Recruitment Operation for public company in Malaysia using Odoo Community.",
    "seoDescription": "Integrated operations for an energy solutions provider.",
    "intro": "Integrated operations for an energy solutions provider.",
    "meta": [
      {
        "label": "Services",
        "value": "Consulting, Implementation & Website Development"
      },
      {
        "label": "Industry",
        "value": "Energy Solutions"
      },
      {
        "label": "Platform",
        "value": "Odoo18 Community"
      },
      {
        "label": "Users",
        "value": "200+ users"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "Citaglobal is an energy solutions provider running Odoo Community ERP integrating CRM, Accounts and Purchase, alongside a custom website, for more than 50 active users."
      },
      {
        "type": "p",
        "text": "Businesses in energy solutions typically run on relationships that span long sales cycles, ongoing vendor arrangements, and public-facing credibility all at once. When the systems behind those three things don't talk to each other CRM in one place, accounting in another, purchasing tracked separately again, and a website that exists on its own island the business ends up managing the same relationship three different ways depending on which department is looking at it."
      },
      {
        "type": "h3",
        "text": "The Challenges"
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Disconnected sales, accounts & purchase CRM, accounting and purchasing ran as separate processes, with no shared system connecting a deal to its financial and vendor detail. It was difficult to get one clear view of a deal or a vendor relationship, and staff in different departments often worked from different versions of the same information.",
        "cells": [
          "Disconnected sales, accounts & purchase CRM, accounting and purchasing ran as separate processes, with no shared system connecting a deal to its financial and vendor detail.",
          "It was difficult to get one clear view of a deal or a vendor relationship, and staff in different departments often worked from different versions of the same information."
        ]
      },
      {
        "type": "tr",
        "text": "No integrated web presence The company's website operated separately from its operational systems, with no connection to the data and processes running behind it. The website's limited connection to actual operations meant it could not effectively support the business the way an integrated web presence would.",
        "cells": [
          "No integrated web presence The company's website operated separately from its operational systems, with no connection to the data and processes running behind it.",
          "The website's limited connection to actual operations meant it could not effectively support the business the way an integrated web presence would."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to bring sales, finance and purchasing onto one connected platform, and to give the business a web presence that worked with that platform rather than beside it."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Bring CRM, Accounts and Purchase onto one connected platform."
      },
      {
        "type": "li",
        "text": "Give the team a single, shared view of each deal and vendor relationship"
      },
      {
        "type": "li",
        "text": "Build a custom website that reflects the business and supports its operations."
      },
      {
        "type": "li",
        "text": "Design the ERP and website together, rather than as two unrelated projects"
      },
      {
        "type": "li",
        "text": "Establish a foundation that could scale with the business"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "li",
        "text": "CRM sales pipeline and customer relationship management"
      },
      {
        "type": "li",
        "text": "Accounts financial management connected directly to sales and purchasing activity"
      },
      {
        "type": "li",
        "text": "Purchase vendor and procurement management integrated with the rest of the platform"
      },
      {
        "type": "li",
        "text": "Custom Website a web presence designed alongside the operational system it represents"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Jupical implemented Odoo Community ERP, integrating CRM, Accounts and Purchase into one platform and pairing it with a custom website build, treating both as a single project rather than an ERP delivered separately from a website."
      },
      {
        "type": "h4",
        "text": "1. Process discovery across sales, finance and purchasing"
      },
      {
        "type": "p",
        "text": "Jupical mapped how deals moved from quote through payment, and how purchasing and vendor relationships were being tracked, to see exactly where the disconnect between departments was creating friction."
      },
      {
        "type": "h4",
        "text": "2. Designing CRM, Accounts and Purchase as one system"
      },
      {
        "type": "p",
        "text": "Rather than configuring each module in isolation, Jupical designed CRM, Accounts and Purchase to share the same underlying data, so a deal, once entered, carries its financial and vendor context with it automatically."
      },
      {
        "type": "h4",
        "text": "3. CRM and sales pipeline configuration"
      },
      {
        "type": "p",
        "text": "The CRM was configured around the business's actual sales process, giving the team a structured, shared pipeline in place of separately maintained records."
      },
      {
        "type": "h4",
        "text": "4. Accounts and Purchase integration"
      },
      {
        "type": "p",
        "text": "Accounts and Purchase were connected directly to CRM activity, so financial and vendor information reflects sales activity as it happens rather than being reconciled separately afterward."
      },
      {
        "type": "h4",
        "text": "5. Custom website design and build"
      },
      {
        "type": "p",
        "text": "The website was designed and built alongside the ERP implementation, rather than treated as a separate project, so the public-facing side of the business could eventually reflect the same operational data running behind it."
      },
      {
        "type": "h4",
        "text": "6. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed complete business scenarios a deal moving through CRM, into accounts, against a purchase order confirming that information stayed consistent across every connected module. Key users from sales, accounts and purchasing took part in acceptance testing."
      },
      {
        "type": "h4",
        "text": "7. Training and adoption"
      },
      {
        "type": "p",
        "text": "Sales, accounts and purchasing teams were each trained on their part of the connected platform, with particular attention to how information now flowed between departments that had previously worked from separate systems."
      },
      {
        "type": "h4",
        "text": "8. Go-live and a scalable foundation"
      },
      {
        "type": "p",
        "text": "Jupical supported the client through go-live across both the ERP and the website, refining configuration as real deals, accounts and purchase orders moved through the connected system. Built on Odoo Community, the platform can scale as the business grows, with the client retaining full ownership and no licensing constraints on expansion."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Integrated CRM, Accounts & Purchase Connects sales, accounting and purchasing on one platform, giving the team a single view across each deal and vendor relationship.",
        "cells": [
          "Integrated CRM, Accounts & Purchase",
          "Connects sales, accounting and purchasing on one platform, giving the team a single view across each deal and vendor relationship."
        ]
      },
      {
        "type": "tr",
        "text": "Custom Website Gives Citaglobal a web presence built alongside its operational systems.",
        "cells": [
          "Custom Website",
          "Gives Citaglobal a web presence built alongside its operational systems."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "CRM, Accounts and Purchase run as separate processes CRM, Accounts and Purchase integrated on one Odoo Community platform",
        "cells": [
          "CRM, Accounts and Purchase run as separate processes",
          "CRM, Accounts and Purchase integrated on one Odoo Community platform"
        ]
      },
      {
        "type": "tr",
        "text": "Website operated separately from operational systems Custom website built alongside the ERP implementation",
        "cells": [
          "Website operated separately from operational systems",
          "Custom website built alongside the ERP implementation"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "With CRM, Accounts and Purchase integrated and a custom website in place, Citaglobal now runs its operations from one connected platform, supporting more than 50 active users."
      },
      {
        "type": "p",
        "text": "A deal now carries its financial and vendor context with it from first contact through to payment, and the company's web presence reflects the same operational foundation running behind it, rather than existing as a separate, disconnected asset."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical delivered both the ERP integration and the website build together, so the client's operational data and web presence were designed to work with each other rather than as separate projects handled by separate teams at separate times."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With CRM, Accounts, Purchase and its website connected on one platform, the business has a foundation that scales as the business grows, without licensing constraints on users or expansion."
      }
    ]
  },
  {
    "slug": "rotoriko-lifting-equipment-trader",
    "detailTitle": "ERP Implementation for Lifting equipment trading company in Odoo Enterprise - INDIA",
    "seoDescription": "Manufacturing and trading, managed on one ERP.",
    "intro": "Manufacturing and trading, managed on one ERP.",
    "meta": [
      {
        "label": "Services",
        "value": "Consulting & Implementation"
      },
      {
        "label": "Industry",
        "value": "Lifting Equipment"
      },
      {
        "label": "Platform",
        "value": "Odoo Enterprise 18"
      },
      {
        "label": "Users",
        "value": "20+ users"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client manufactures and trades lifting equipment, running Odoo Enterprise 18 ERP across its operations with 20 active users."
      },
      {
        "type": "p",
        "text": "Manufacturing and trading under one roof is a less common combination than it sounds, and it creates a genuinely specific coordination problem. A pure manufacturer only needs to track what it produces. A pure trader only needs to track what it buys and resells. A business doing both needs the same inventory system to hold two categories of stock that behave completely differently one built up over a production run, the other sourced externally against demand and to give sales one honest answer regardless of which category a given order draws from."
      },
      {
        "type": "h3",
        "text": "The Challenges"
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Manufacturing & trading managed separately The manufacturing and trading sides of the business operated with limited shared visibility into each other's activity. Stock and demand planning was complicated by the two sides of the business effectively working from different pictures of what was available and what was needed.",
        "cells": [
          "Manufacturing & trading managed separately The manufacturing and trading sides of the business operated with limited shared visibility into each other's activity.",
          "Stock and demand planning was complicated by the two sides of the business effectively working from different pictures of what was available and what was needed."
        ]
      },
      {
        "type": "tr",
        "text": "Fragmented inventory view Inventory produced in-house and inventory sourced for trading weren't tracked on one unified system. Sales staff and planners had to check two different sources to understand true available stock, slowing down decisions and increasing the risk of overselling or under-ordering.",
        "cells": [
          "Fragmented inventory view Inventory produced in-house and inventory sourced for trading weren't tracked on one unified system.",
          "Sales staff and planners had to check two different sources to understand true available stock, slowing down decisions and increasing the risk of overselling or under-ordering."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to bring the manufacturing and trading sides of the business onto one connected platform, so that stock and demand could be planned from a single, shared picture rather than two separate ones."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Bring manufacturing and trading operations onto one connected platform."
      },
      {
        "type": "li",
        "text": "Give the team a unified view of inventory across both produced and traded goods."
      },
      {
        "type": "li",
        "text": "Let sales quote confidently against true available stock, regardless of its source"
      },
      {
        "type": "li",
        "text": "Support planning decisions that weigh production capacity against external sourcing on equal footing"
      },
      {
        "type": "li",
        "text": "Build a foundation that scales as both sides of the business grow"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "li",
        "text": "Manufacturing operations production planning and execution on Odoo Enterprise 18"
      },
      {
        "type": "li",
        "text": "Trading operations sourcing, purchasing and resale management on the same platform"
      },
      {
        "type": "li",
        "text": "Unified inventory produced and traded stock tracked together, giving sales one accurate view"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Jupical implemented Odoo Enterprise 18 ERP, integrating operations across both the manufacturing and trading sides of the business onto one platform, rather than running them as two loosely connected systems sharing a company name."
      },
      {
        "type": "h4",
        "text": "1. Understanding both sides of the business"
      },
      {
        "type": "p",
        "text": "Jupical mapped manufacturing and trading as they actually ran side by side — where each sourced its stock, how each planned against demand, and where the two sides currently had no visibility into each other's activity."
      },
      {
        "type": "h4",
        "text": "2. Designing a single inventory model for two kinds of stock"
      },
      {
        "type": "p",
        "text": "Rather than configuring manufacturing and trading as separate inventory silos bridged after the fact, Jupical designed one inventory structure capable of holding both produced and traded stock, so sales could quote against a single accurate figure regardless of where the stock came from."
      },
      {
        "type": "h4",
        "text": "3. Manufacturing operations configuration"
      },
      {
        "type": "p",
        "text": "Production planning and execution were configured on Odoo Enterprise 18, giving the manufacturing side of the business the tools to plan runs against real, visible demand rather than in isolation from trading activity."
      },
      {
        "type": "h4",
        "text": "4. Trading operations configuration"
      },
      {
        "type": "p",
        "text": "Sourcing, purchasing and resale management were configured on the same platform, so trading decisions could be made with visibility into what the factory could produce instead of purely on external sourcing terms."
      },
      {
        "type": "h4",
        "text": "5. Unifying the inventory view"
      },
      {
        "type": "p",
        "text": "Produced and traded stock were brought together into one inventory view, removing the need for sales and planning staff to check two separate sources to understand true available stock."
      },
      {
        "type": "h4",
        "text": "6. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed scenarios spanning both sides of the business a production run feeding into available stock, a trading purchase feeding into the same stock figure, and a sales order drawing against either confirming that inventory stayed accurate and consistent regardless of source. Key users from manufacturing, trading and sales took part in acceptance testing."
      },
      {
        "type": "h4",
        "text": "7. Training and adoption"
      },
      {
        "type": "p",
        "text": "Manufacturing and trading teams were each trained on their side of the platform, with particular attention paid to how the two sides now shared visibility into stock and demand that had previously been siloed."
      },
      {
        "type": "h4",
        "text": "8. Go-live and a scalable foundation"
      },
      {
        "type": "p",
        "text": "Jupical supported the client through go-live and refined the configuration as real production runs, purchases and sales orders moved through the connected system. Built on Odoo Enterprise, the platform can scale as both sides of the business grow, with the client retaining full ownership of its operations."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Unified Manufacturing & Trading Operations Brings both sides of Rotoriko's business onto one Odoo Enterprise 18 platform, giving the team a shared view of inventory and demand.",
        "cells": [
          "Unified Manufacturing & Trading Operations",
          "Brings both sides of Rotoriko's business onto one Odoo Enterprise 18 platform, giving the team a shared view of inventory and demand."
        ]
      },
      {
        "type": "tr",
        "text": "Combined inventory view Tracks produced and traded goods together in one system, so sales can quote against a single, accurate figure of what's actually available.",
        "cells": [
          "Combined inventory view",
          "Tracks produced and traded goods together in one system, so sales can quote against a single, accurate figure of what's actually available."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Manufacturing and trading operated with limited shared visibility Manufacturing and trading operations connected on one platform",
        "cells": [
          "Manufacturing and trading operated with limited shared visibility",
          "Manufacturing and trading operations connected on one platform"
        ]
      },
      {
        "type": "tr",
        "text": "Inventory from production and trading tracked separately Unified inventory view across both produced and traded goods",
        "cells": [
          "Inventory from production and trading tracked separately",
          "Unified inventory view across both produced and traded goods"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "With manufacturing and trading operations integrated on Odoo Enterprise 18, Rotoriko's 14 active users now work from a shared view of inventory and operations across both sides of the business."
      },
      {
        "type": "p",
        "text": "Sales can quote confidently against stock regardless of whether it came from a production run or a trading purchase, and planners on both sides now work from the same picture of demand rather than two separate, occasionally conflicting ones."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical brought its experience implementing ERP for businesses that combine manufacturing and trading to this client's lifting equipment operations, recognising early that the two sides of the business needed one shared inventory model, not two systems politely exchanging updates."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With manufacturing and trading connected on one platform, the business has a foundation that can scale as both sides grow, without licensing constraints on users or expansion."
      }
    ]
  },
  {
    "slug": "heben-crane-manufacturing",
    "detailTitle": "Simplified CRM, Stock and Manufacturing processes into single ERP System.",
    "seoDescription": "A CRM that speaks the language of crane specifications.",
    "intro": "A CRM that speaks the language of crane specifications.",
    "meta": [
      {
        "label": "Platform",
        "value": "Odoo Enterprise 18"
      },
      {
        "label": "Industry",
        "value": "Crane & Hoist Manufacturing"
      },
      {
        "label": "Services",
        "value": "Customization, Consulting & Implementation"
      },
      {
        "label": "Users",
        "value": "20+ users"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is a crane and hoist manufacturer based in Gujarat, India, producing single and double girder EOT cranes, hoists and crabs for industrial clients across the country."
      },
      {
        "type": "p",
        "text": "Crane manufacturing sells on specification, not just price. A single quotation can span several sheds and product types a single girder hoist here, a double girder crab there, a EURO hoist somewhere else and each item carries its own technical detail: duty classification, crane control, power rating, hoist specification, special features and the specific vendors behind major mechanical and electrical components. A generic CRM quotation template has no vocabulary for any of that, which meant the sales team was assembling technical, spec-accurate proposals largely by hand."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "No structured CRM for sales and customer management Customer relationships, quotations and follow-ups had no dedicated system, leaving the sales team without a shared, structured pipeline. Tracking where a deal stood, and following up consistently, depended on individual sales staff rather than a shared, visible process.",
        "cells": [
          "No structured CRM for sales and customer management Customer relationships, quotations and follow-ups had no dedicated system, leaving the sales team without a shared, structured pipeline.",
          "Tracking where a deal stood, and following up consistently, depended on individual sales staff rather than a shared, visible process."
        ]
      },
      {
        "type": "tr",
        "text": "Multi-item technical specifications assembled by hand Every quotation spanning multiple sheds and crane types required its own detailed spec block general specifications, duty classification, crane control, power, hoist specification, special features and vendor lists built manually for each item. Assembling accurate, complete technical detail for every line item was slow and repetitive, and the risk of a copy-paste error creeping into a technical specification carried real commercial consequences.",
        "cells": [
          "Multi-item technical specifications assembled by hand Every quotation spanning multiple sheds and crane types required its own detailed spec block general specifications, duty classification, crane control, power, hoist specification, special features and vendor lists built manually for each item.",
          "Assembling accurate, complete technical detail for every line item was slow and repetitive, and the risk of a copy-paste error creeping into a technical specification carried real commercial consequences."
        ]
      },
      {
        "type": "tr",
        "text": "Commercial terms retyped for every quotation Standard terms packing & forwarding, taxes & duties, payment terms, delivery terms, change-of-specification policy, offer validity and warranty conditions had no single template and were reproduced manually deal by deal. Consistency depended on whoever assembled the document remembering every clause correctly, and quotations risked going out incomplete or with terms that didn't match the company's standard position.",
        "cells": [
          "Commercial terms retyped for every quotation Standard terms packing & forwarding, taxes & duties, payment terms, delivery terms, change-of-specification policy, offer validity and warranty conditions had no single template and were reproduced manually deal by deal.",
          "Consistency depended on whoever assembled the document remembering every clause correctly, and quotations risked going out incomplete or with terms that didn't match the company's standard position."
        ]
      },
      {
        "type": "tr",
        "text": "Manual tax and total calculations Subtotals, tax amounts and grand totals across multi-section, multi-item orders had to be calculated by hand. Larger orders with several sheds and product types multiplied the chance of a calculation error reaching a customer-facing quotation.",
        "cells": [
          "Manual tax and total calculations Subtotals, tax amounts and grand totals across multi-section, multi-item orders had to be calculated by hand.",
          "Larger orders with several sheds and product types multiplied the chance of a calculation error reaching a customer-facing quotation."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to give the sales team a structured CRM that could also produce spec-accurate, commercially complete quotations directly from the customer record, rather than assembling technical and commercial detail by hand for every deal."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Give the sales team a structured way to manage customers, quotations and follow-ups"
      },
      {
        "type": "li",
        "text": "Generate detailed technical specifications for each quoted item directly from CRM data"
      },
      {
        "type": "li",
        "text": "Produce a single branded document combining technical specifications and commercial terms"
      },
      {
        "type": "li",
        "text": "Automate tax, subtotal and grand-total calculations across multi-section orders"
      },
      {
        "type": "li",
        "text": "Standardise commercial terms across every quotation without manual retyping"
      },
      {
        "type": "li",
        "text": "Reduce the time and error risk involved in producing a customer-ready proposal"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "li",
        "text": "CRM (Sales & Customer Management) structured customer, quotation and follow-up tracking"
      },
      {
        "type": "li",
        "text": "Custom Quotation / Commercial Proposal Document a single branded PDF combining technical and commercial detail"
      },
      {
        "type": "li",
        "text": "Multi-Section Technical Specification Output a detailed spec block generated per quoted item"
      },
      {
        "type": "li",
        "text": "Automated Tax & Subtotal Calculation accurate totals generated across multi-item, multi-section orders"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Jupical implemented standard Odoo Enterprise 18 CRM, giving the sales team a structured way to manage customer relationships, quotations and follow-ups for 10+ active users then extended it with a custom quotation engine built specifically around how this business actually quotes crane orders."
      },
      {
        "type": "h4",
        "text": "1. Understanding how a crane quotation is actually built"
      },
      {
        "type": "p",
        "text": "Jupical studied real multi-item quotations spanning different sheds and product types, each with its own technical specification and commercial line to understand exactly what data needed to flow from the CRM into a finished, customer-ready document."
      },
      {
        "type": "h4",
        "text": "2. CRM configuration for sales and customer management"
      },
      {
        "type": "p",
        "text": "Standard Odoo Enterprise 18 CRM was configured to give the sales team a structured pipeline for customers, quotations and follow-ups, replacing an unstructured process with one visible across the whole team."
      },
      {
        "type": "h4",
        "text": "3. Designing the multi-item specification structure"
      },
      {
        "type": "p",
        "text": "Jupical designed a data structure capable of holding a full technical specification general specifications, duty classification, crane control, power, hoist specification, special features and component vendor lists against each individual quoted item, rather than as a single spec block for the whole order."
      },
      {
        "type": "h4",
        "text": "4. Building the custom quotation and proposal document"
      },
      {
        "type": "p",
        "text": "A document generator was built to produce a single branded PDF directly from the CRM record: full technical specification for every item, followed by a commercial proposal section grouped by shed or section, each with quantity, rate, applicable tax and subtotal."
      },
      {
        "type": "h4",
        "text": "5. Automated tax, subtotal and grand-total calculation"
      },
      {
        "type": "p",
        "text": "Section-wise subtotals, tax amounts and a grand total were calculated automatically across the full order, removing the manual arithmetic that previously sat between a multi-item quotation and a number a customer could rely on."
      },
      {
        "type": "h4",
        "text": "6. Templating standard commercial terms"
      },
      {
        "type": "p",
        "text": "Packing & forwarding, taxes & duties, payment terms, delivery terms, change-of-specification policy, offer validity and warranty conditions were built into the same document template, so every quotation carries the company's standard terms automatically rather than depending on manual retyping."
      },
      {
        "type": "h4",
        "text": "7. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed real multi-item, multi-shed quotations end to end CRM entry, specification generation for each item, section-wise commercial calculation, and the final branded PDF confirming that every figure and every specification matched what the sales team would have produced by hand. Key sales users took part in acceptance testing."
      },
      {
        "type": "h4",
        "text": "8. Training, go-live and a scalable foundation"
      },
      {
        "type": "p",
        "text": "The sales team was trained on the CRM pipeline and on generating quotations directly from customer records. Jupical supported go-live and refined the document template as real quotations went out. Built on Odoo Enterprise, the CRM can scale as the sales team and order volume grow."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Multi-Item Technical Specification Sections Each quoted item (hoist, crab, EURO hoist, etc.) gets its own detailed spec block general specifications, duty classification, crane control, power, hoist specification, special features, and a mechanical/electrical component vendor list generated directly from the CRM record.",
        "cells": [
          "Multi-Item Technical Specification Sections",
          "Each quoted item (hoist, crab, EURO hoist, etc.) gets its own detailed spec block general specifications, duty classification, crane control, power, hoist specification, special features, and a mechanical/electrical component vendor list generated directly from the CRM record."
        ]
      },
      {
        "type": "tr",
        "text": "Section-Wise Commercial Proposal Line items are grouped by shed/section, each with quantity, rate, tax percentage, and a calculated subtotal, rolling up to a single untaxed amount, tax total, and grand total for the full order.",
        "cells": [
          "Section-Wise Commercial Proposal",
          "Line items are grouped by shed/section, each with quantity, rate, tax percentage, and a calculated subtotal, rolling up to a single untaxed amount, tax total, and grand total for the full order."
        ]
      },
      {
        "type": "tr",
        "text": "Standard Terms & Warranty Block Packing & forwarding, taxes & duties, payment terms, delivery terms, change-of-specification policy, offer validity, and full warranty conditions are all templated into the same document, so every quotation ships with consistent, complete commercial terms.",
        "cells": [
          "Standard Terms & Warranty Block",
          "Packing & forwarding, taxes & duties, payment terms, delivery terms, change-of-specification policy, offer validity, and full warranty conditions are all templated into the same document, so every quotation ships with consistent, complete commercial terms."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Customer relationships and quotations tracked without a structured CRM. Sales, customers and follow-ups managed through a structured CRM pipeline.",
        "cells": [
          "Customer relationships and quotations tracked without a structured CRM.",
          "Sales, customers and follow-ups managed through a structured CRM pipeline."
        ]
      },
      {
        "type": "tr",
        "text": "Technical specifications assembled by hand for every quoted item. Detailed spec blocks generated automatically per item, directly from the CRM.",
        "cells": [
          "Technical specifications assembled by hand for every quoted item.",
          "Detailed spec blocks generated automatically per item, directly from the CRM."
        ]
      },
      {
        "type": "tr",
        "text": "Commercial terms retyped or copy-pasted into each new proposal. Standard terms templated into every quotation automatically.",
        "cells": [
          "Commercial terms retyped or copy-pasted into each new proposal.",
          "Standard terms templated into every quotation automatically."
        ]
      },
      {
        "type": "tr",
        "text": "Subtotals, tax and grand totals calculated manually. Taxes, subtotals and totals calculated automatically per quotation.",
        "cells": [
          "Subtotals, tax and grand totals calculated manually.",
          "Taxes, subtotals and totals calculated automatically per quotation."
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "The CRM implementation gave Heben Cranes' sales team a streamlined way to manage customers and generate accurate, professional, ready-to-send quotations combining detailed technical specifications and commercial terms in one branded document instead of assembling them manually per deal."
      },
      {
        "type": "p",
        "text": "What used to take careful manual assembly matching the right specification to the right item, calculating totals across sections, remembering every standard clause now happens consistently every time a quotation is generated, freeing the sales team to spend that time on the deal itself rather than the document behind it."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical didn't treat this as a standard CRM rollout. Understanding that a crane quotation is a technical document as much as a commercial one shaped the entire solution — from how specifications are structured per item to how commercial terms are templated into the same branded output."
      },
      {
        "type": "h3",
        "text": "Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With CRM, quotation generation and commercial terms connected on one platform, the business has a foundation that scales as its sales team and order volume grow, without licensing constraints on users or expansion."
      },
      {
        "type": "h3",
        "text": "Sending Technical Quotations Manually?"
      },
      {
        "type": "p",
        "text": "Build a CRM that generates branded, spec-accurate quotations automatically."
      }
    ]
  },
  {
    "slug": "one-green-arrow-manpower-corp",
    "detailTitle": "Indian Payroll Compliance: Overcoming Payroll Compliance Challenges in India",
    "seoDescription": "A centralized HRMS covering the full employee lifecycle, built for Indian statutory compliance.",
    "intro": "A centralized HRMS covering the full employee lifecycle, built for Indian statutory compliance.",
    "meta": [
      {
        "label": "Client",
        "value": "Multi-branch organization"
      },
      {
        "label": "Industry",
        "value": "Manpower supply"
      },
      {
        "label": "Services",
        "value": "Customization, Consulting & Implementation"
      },
      {
        "label": "Platform",
        "value": "Odoo"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is a manufacturing organization with multiple branches across different cities, requiring a payroll system fully compliant with Indian statutory regulations while seamlessly managing attendance, shifts, and employee records across all locations."
      },
      {
        "type": "p",
        "text": "Payroll management is closely connected with attendance, shifts, leave, and statutory compliance. Payroll goes beyond salary calculation it includes attendance tracking (check-in/check-out), late arrivals, early exits, leave management, shift scheduling, overtime, and statutory deductions such as PF, ESI, PT, and LWF as per Indian labour laws."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "p",
        "text": "The manufacturing process required a controlled digital trail from incoming component to finished battery."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Attendance management issues Multiple shifts, overtime rotations, and a mix of biometric and manual attendance methods created inconsistencies across branches. Real-time attendance tracking across shifts became a major operational challenge, directly undermining payroll accuracy downstream.",
        "cells": [
          "Attendance management issues Multiple shifts, overtime rotations, and a mix of biometric and manual attendance methods created inconsistencies across branches.",
          "Real-time attendance tracking across shifts became a major operational challenge, directly undermining payroll accuracy downstream."
        ]
      },
      {
        "type": "tr",
        "text": "Hiring-to-exit lifecycle gaps Fragmented employee records, contract labour tracking, and high workforce turnover made the full onboarding-to-exit lifecycle hard to manage without a centralized system. Data gaps opened up across the employee lifecycle, creating both administrative friction and compliance risk.",
        "cells": [
          "Hiring-to-exit lifecycle gaps Fragmented employee records, contract labour tracking, and high workforce turnover made the full onboarding-to-exit lifecycle hard to manage without a centralized system.",
          "Data gaps opened up across the employee lifecycle, creating both administrative friction and compliance risk."
        ]
      },
      {
        "type": "tr",
        "text": "Asset management Uniforms, tools, ID cards, laptops and mobile devices were tracked manually across multi-company operations. Lost assets, duplicate records, and misuse went unnoticed, with offboarding often failing to properly recover assigned assets.",
        "cells": [
          "Asset management Uniforms, tools, ID cards, laptops and mobile devices were tracked manually across multi-company operations.",
          "Lost assets, duplicate records, and misuse went unnoticed, with offboarding often failing to properly recover assigned assets."
        ]
      },
      {
        "type": "tr",
        "text": "Payslips & statutory compliance Overtime, incentives, shift allowances, and attendance variations made manual payroll processing prone to errors and delays. PF, ESI, PT, LWF and TDS compliance added further administrative burden on top of an already error-prone manual process, with real non-compliance risk.",
        "cells": [
          "Payslips & statutory compliance Overtime, incentives, shift allowances, and attendance variations made manual payroll processing prone to errors and delays.",
          "PF, ESI, PT, LWF and TDS compliance added further administrative burden on top of an already error-prone manual process, with real non-compliance risk."
        ]
      },
      {
        "type": "tr",
        "text": "Time-off & leave approval Leave was tracked manually through Excel sheets across multiple manufacturing companies. This caused conflicts, approval delays, and inconsistent records between branches.",
        "cells": [
          "Time-off & leave approval Leave was tracked manually through Excel sheets across multiple manufacturing companies.",
          "This caused conflicts, approval delays, and inconsistent records between branches."
        ]
      },
      {
        "type": "tr",
        "text": "Offboarding & full & final settlement complexity Final settlements depended on pulling together data from attendance, assets, and dues that lived in separate, disconnected places. Settlements were time-consuming and often inaccurate, adding friction to what should be a routine administrative process.",
        "cells": [
          "Offboarding & full & final settlement complexity Final settlements depended on pulling together data from attendance, assets, and dues that lived in separate, disconnected places.",
          "Settlements were time-consuming and often inaccurate, adding friction to what should be a routine administrative process."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "li",
        "text": "Replace manual, disconnected HR processes with a centralized, easy-to-use HRMS."
      },
      {
        "type": "li",
        "text": "Manage the complete employee lifecycle — hiring, attendance, payroll, leave, assets, and offboarding — on one platform."
      },
      {
        "type": "li",
        "text": "Automate statutory compliance for PF, ESI, PT, LWF and TDS."
      },
      {
        "type": "li",
        "text": "Bring accuracy, transparency and smooth coordination to shift, overtime and multi-branch workforce management."
      },
      {
        "type": "li",
        "text": "Eliminate manual errors and delays in full & final settlement processing."
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "li",
        "text": "Hiring-to-Exit Lifecycle one connected system from recruitment through offboarding"
      },
      {
        "type": "li",
        "text": "Attendance & Shift Management accurate tracking across multiple shifts and locations"
      },
      {
        "type": "li",
        "text": "Payroll Processing & Payslip Generation automated, based on attendance, overtime and allowances"
      },
      {
        "type": "li",
        "text": "Statutory Compliance Automation PF, ESI, PT, LWF and TDS built into the payroll engine"
      },
      {
        "type": "li",
        "text": "Asset Management centralized tracking of company-issued resources"
      },
      {
        "type": "li",
        "text": "Leave Approval automated, integrated directly with payroll"
      },
      {
        "type": "li",
        "text": "Overtime Management accurate calculation feeding straight into payslips"
      },
      {
        "type": "li",
        "text": "Full & Final Settlement a structured, controlled offboarding workflow"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Instead of deploying a generic HRMS, Jupical delivered a tailored solution covering the entire employee lifecycle from hiring to exit. Integrated attendance and shift management, leave approvals, overtime tracking, payroll processing with instant payslip generation, statutory compliance automation, asset tracking, and full & final settlement were all brought together in one seamless platform, built after deeply understanding the client's real operational workflows and Indian statutory requirements."
      },
      {
        "type": "h4",
        "text": "1. Understanding operations across every branch"
      },
      {
        "type": "p",
        "text": "Jupical mapped how attendance, shifts, leave, payroll and asset tracking actually worked across the client's multiple branches and workforce categories permanent, contractual and temporary to see exactly where fragmentation was creating compliance risk and administrative burden."
      },
      {
        "type": "h4",
        "text": "2. Designing one system for the full employee lifecycle"
      },
      {
        "type": "p",
        "text": "Rather than treating recruitment, attendance, payroll, leave, assets and offboarding as separate modules bridged together, Jupical designed a single connected data model so an employee's record carries its full history from hiring through exit."
      },
      {
        "type": "h4",
        "text": "3. Recruitment and onboarding configuration"
      },
      {
        "type": "p",
        "text": "A centralized recruitment system was built covering the full hiring lifecycle across branches — online application forms, automated tracking from inquiry to interview, branch-wise management, and a structured onboarding workflow."
      },
      {
        "type": "h4",
        "text": "4. Attendance, shift and overtime configuration"
      },
      {
        "type": "p",
        "text": "Attendance was configured to handle multiple shifts, late arrival limits, emergency check-outs, different working schedules, and automatic handling of missed punch-outs, so records stayed accurate and complete without manual reconciliation."
      },
      {
        "type": "h4",
        "text": "5. Building statutory-compliant payroll processing"
      },
      {
        "type": "p",
        "text": "Payroll was built to generate payslips automatically from attendance, overtime and allowance data, with PF, ESI, PT, LWF and TDS compliance calculated directly into the engine through configurable salary templates — rather than checked manually after the fact."
      },
      {
        "type": "h4",
        "text": "6. Leave, asset and offboarding workflows"
      },
      {
        "type": "p",
        "text": "Leave and time-off tracking were integrated directly with payroll, asset management was centralized to track company-issued resources through their full lifecycle, and a structured offboarding workflow was built to automate full & final settlement calculations — notice period, days worked, and loss of pay."
      },
      {
        "type": "h4",
        "text": "7. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed complete employee lifecycles hiring through onboarding, attendance and leave across a payroll cycle, statutory deduction calculation, and a full offboarding settlement confirming that data stayed accurate and consistent at every stage. Key users from HR and payroll took part in acceptance testing."
      },
      {
        "type": "h4",
        "text": "8. Training, go-live and a scalable foundation"
      },
      {
        "type": "p",
        "text": "HR and payroll teams were trained across every module, and Jupical supported go-live and refined configuration as real payroll cycles ran through the system. Built on Odoo HRMS, the platform can scale as the organization adds branches and headcount."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Feature What It Delivers",
        "cells": [
          "Feature",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Job Opening to Employee Onboarding A centralized recruitment system managing the full hiring lifecycle across multiple branches online application forms for detailed candidate data, automated tracking from inquiry to interview, branch-wise management, and a structured onboarding workflow.",
        "cells": [
          "Job Opening to Employee Onboarding",
          "A centralized recruitment system managing the full hiring lifecycle across multiple branches online application forms for detailed candidate data, automated tracking from inquiry to interview, branch-wise management, and a structured onboarding workflow."
        ]
      },
      {
        "type": "tr",
        "text": "Attendance Management Automated check-in/out tracking, late arrival limits, emergency check-outs, overtime management, different working schedules and days, and automatic handling of missed punch-outs ensuring accurate, complete attendance records with no missed entries.",
        "cells": [
          "Attendance Management",
          "Automated check-in/out tracking, late arrival limits, emergency check-outs, overtime management, different working schedules and days, and automatic handling of missed punch-outs ensuring accurate, complete attendance records with no missed entries."
        ]
      },
      {
        "type": "tr",
        "text": "Asset Management Tracks and manages company-issued resources such as mobile devices and systems, with centralized visibility, improved accountability, reduced asset loss, and streamlined allocation and recovery during offboarding.",
        "cells": [
          "Asset Management",
          "Tracks and manages company-issued resources such as mobile devices and systems, with centralized visibility, improved accountability, reduced asset loss, and streamlined allocation and recovery during offboarding."
        ]
      },
      {
        "type": "tr",
        "text": "Payslips & Statutory Compliance Automated payroll with payslip generation based on attendance, overtime, and allowances, ensuring full statutory compliance (PF, ESI, PT, LWF, TDS) supported by configurable salary templates.",
        "cells": [
          "Payslips & Statutory Compliance",
          "Automated payroll with payslip generation based on attendance, overtime, and allowances, ensuring full statutory compliance (PF, ESI, PT, LWF, TDS) supported by configurable salary templates."
        ]
      },
      {
        "type": "tr",
        "text": "Time-Off & Leave Approval A time-off and leave management system aligned with annual paid leave policies and monthly short-break allowances, automating leave tracking including pre- and post-shift short breaks with seamless integration into payroll.",
        "cells": [
          "Time-Off & Leave Approval",
          "A time-off and leave management system aligned with annual paid leave policies and monthly short-break allowances, automating leave tracking including pre- and post-shift short breaks with seamless integration into payroll."
        ]
      },
      {
        "type": "tr",
        "text": "Offboarding & Full & Final Settlement A customized offboarding and settlement workflow with controlled approvals, letting HR generate settlements, notify employees, and provide downloadable records, with automated calculations for notice period, days worked, and loss of pay.",
        "cells": [
          "Offboarding & Full & Final Settlement",
          "A customized offboarding and settlement workflow with controlled approvals, letting HR generate settlements, notify employees, and provide downloadable records, with automated calculations for notice period, days worked, and loss of pay."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Attendance tracked inconsistently across multiple shifts and methods Automated attendance system with accurate, complete records and no missed entries",
        "cells": [
          "Attendance tracked inconsistently across multiple shifts and methods",
          "Automated attendance system with accurate, complete records and no missed entries"
        ]
      },
      {
        "type": "tr",
        "text": "Fragmented employee records across the hiring-to-exit lifecycle Centralized recruitment-to-onboarding workflow across all branches",
        "cells": [
          "Fragmented employee records across the hiring-to-exit lifecycle",
          "Centralized recruitment-to-onboarding workflow across all branches"
        ]
      },
      {
        "type": "tr",
        "text": "Assets tracked manually, prone to loss and duplicate records Centralized asset visibility with streamlined allocation and offboarding recovery",
        "cells": [
          "Assets tracked manually, prone to loss and duplicate records",
          "Centralized asset visibility with streamlined allocation and offboarding recovery"
        ]
      },
      {
        "type": "tr",
        "text": "Payroll processed manually, prone to errors amid overtime and allowances Automated payslip generation with built-in PF, ESI, PT, LWF and TDS compliance",
        "cells": [
          "Payroll processed manually, prone to errors amid overtime and allowances",
          "Automated payslip generation with built-in PF, ESI, PT, LWF and TDS compliance"
        ]
      },
      {
        "type": "tr",
        "text": "Leave and time-off tracked in Excel, causing conflicts and delays Automated leave tracking integrated directly with payroll",
        "cells": [
          "Leave and time-off tracked in Excel, causing conflicts and delays",
          "Automated leave tracking integrated directly with payroll"
        ]
      },
      {
        "type": "tr",
        "text": "Final settlements slow and inaccurate due to disconnected data Structured offboarding workflow with automated settlement calculations",
        "cells": [
          "Final settlements slow and inaccurate due to disconnected data",
          "Structured offboarding workflow with automated settlement calculations"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "The implemented solution streamlined HR operations for the manufacturing business in Rajkot by automating recruitment, attendance, payroll, asset management, and offboarding processes."
      },
      {
        "type": "p",
        "text": "Designed in line with Indian statutory compliance, it improved accuracy, reduced manual effort, and ensured regulatory compliance giving the client better operational control, faster decision-making, and a more efficient, scalable workforce management system, with seamless integration of attendance and leave data into payroll and on-time payslip generation with zero manual intervention."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical didn't implement a generic HR system and label it a manufacturing solution. Every module from recruitment and attendance policies to payroll compliance, asset tracking, and full & final settlement was built after deeply understanding real operational workflows and Indian statutory requirements."
      },
      {
        "type": "p",
        "text": "Designed around the client's real processes, the system was easy to use from day one, driving quick adoption and immediate efficiency improvements."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "More than digitizing HR, Jupical enabled the organization to build a structured and scalable workforce management foundation with accurate attendance, compliant payroll, controlled assets, and seamless offboarding, all managed in one unified system.."
      }
    ]
  },
  {
    "slug": "millennium-defence-and-auto-parts-manufacturer",
    "detailTitle": "Millennium Forging: CRM, Purchase, Manufacturing & Inventory on Odoo",
    "seoDescription": "Integrated operations for a defence and auto parts manufacturer.",
    "intro": "Integrated operations for a defence and auto parts manufacturer.",
    "meta": [
      {
        "label": "Services",
        "value": "Consulting & Implementation"
      },
      {
        "label": "Industry",
        "value": "Defence & Auto Parts Manufacturing"
      },
      {
        "label": "Platform",
        "value": "Odoo Community"
      },
      {
        "label": "Users",
        "value": "50+ users"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "Millennium Forging manufactures defence and auto parts, running Odoo Community ERP integrating CRM, purchase, manufacturing and inventory for more than 50 active users."
      },
      {
        "type": "p",
        "text": "Defence and auto parts manufacturing carries a stricter version of a problem most manufacturers face: procurement, production and stock have to stay tightly coordinated, because quality tolerances and delivery timelines matter more here than in most industries. A missed handoff between purchasing and production isn't just an inconvenience in this kind of work it's a delivery commitment at risk, and in defence-adjacent supply, a compliance concern as well."
      },
      {
        "type": "h3",
        "text": "The Challenges"
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Disconnected purchase, manufacturing & inventory Procurement, production and stock tracking ran as separate processes, with no shared system connecting the three. Coordination between departments grew harder as order volume increased, since each function was effectively working from its own version of the truth.",
        "cells": [
          "Disconnected purchase, manufacturing & inventory Procurement, production and stock tracking ran as separate processes, with no shared system connecting the three.",
          "Coordination between departments grew harder as order volume increased, since each function was effectively working from its own version of the truth."
        ]
      },
      {
        "type": "tr",
        "text": "Limited sales visibility Customer relationships and sales activity had no structured CRM behind them. There was no consistent way to track a customer relationship or a deal's progress, and that gap became more costly as the sales team and customer base grew.",
        "cells": [
          "Limited sales visibility Customer relationships and sales activity had no structured CRM behind them.",
          "There was no consistent way to track a customer relationship or a deal's progress, and that gap became more costly as the sales team and customer base grew."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to bring CRM, purchase, manufacturing and inventory onto one connected platform, so procurement, production and sales could all work from the same picture of the business."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Bring CRM, purchase, manufacturing and inventory onto one connected platform."
      },
      {
        "type": "li",
        "text": "Improve coordination between procurement and production as volume scales."
      },
      {
        "type": "li",
        "text": "Give the sales team a structured, trackable view of customer relationships"
      },
      {
        "type": "li",
        "text": "Reduce the risk that comes from departments working off separate, disconnected data"
      },
      {
        "type": "li",
        "text": "Build a foundation that scales with order volume without added licensing cost"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "li",
        "text": "CRM structured customer relationship and sales activity tracking"
      },
      {
        "type": "li",
        "text": "Purchase procurement connected directly to production and stock data"
      },
      {
        "type": "li",
        "text": "Manufacturing production planning and execution on the same platform"
      },
      {
        "type": "li",
        "text": "Inventory stock tracking unified with purchase and manufacturing activity"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Jupical implemented Odoo Community ERP, integrating CRM, purchase, manufacturing and inventory onto one platform, so that a customer order, a procurement decision and a production schedule could all be read from the same underlying data."
      },
      {
        "type": "h4",
        "text": "1. Understanding how orders moved through the business"
      },
      {
        "type": "p",
        "text": "Jupical mapped the path an order took from first customer contact through procurement, production and final stock movement, to identify exactly where the disconnection between departments was creating friction."
      },
      {
        "type": "h4",
        "text": "2. Designing one connected data model"
      },
      {
        "type": "p",
        "text": "Rather than configuring CRM, purchase, manufacturing and inventory as separate modules bridged together after the fact, Jupical designed them to share the same underlying data, so information entered once stays accurate everywhere it's needed."
      },
      {
        "type": "h4",
        "text": "3. CRM configuration for sales visibility"
      },
      {
        "type": "p",
        "text": "The CRM was configured to give the sales team a structured, trackable view of customer relationships and deal activity, replacing a process that previously had no shared system behind it."
      },
      {
        "type": "h4",
        "text": "4. Purchase and manufacturing integration"
      },
      {
        "type": "p",
        "text": "Purchase and manufacturing were configured to read from the same data, so a procurement decision could be made with visibility into production capacity, and a production schedule could be set with an accurate read on incoming stock."
      },
      {
        "type": "h4",
        "text": "5. Unifying inventory across the platform"
      },
      {
        "type": "p",
        "text": "Inventory was connected directly to both purchase and manufacturing activity, so stock levels reflected the business as it actually moved rather than requiring reconciliation between separate systems."
      },
      {
        "type": "h4",
        "text": "6. Validation and user acceptance testing"
      },
      {
        "type": "p",
        "text": "Testing followed full order cycles a customer deal in CRM, a resulting purchase order, a production run, and the stock movement at the end of it — confirming that data stayed consistent across every connected module. Key users from sales, purchasing and production took part in acceptance testing."
      },
      {
        "type": "h4",
        "text": "7. Training and adoption"
      },
      {
        "type": "p",
        "text": "Sales, purchasing, production and inventory teams were each trained on their part of the connected platform, with particular attention to how information now flowed between departments that had previously worked in isolation."
      },
      {
        "type": "h4",
        "text": "8. Go-live and a scalable foundation"
      },
      {
        "type": "p",
        "text": "Jupical supported the client through go-live and refined configuration as real orders, purchases and production runs moved through the system. Built on Odoo Community, the platform can scale as order volume grows, with the client retaining full ownership and no licensing constraints on expansion."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Integrated CRM, Purchase, Manufacturing & Inventory Connects customer relationships, procurement, production and stock on one Odoo Community platform, replacing disconnected departmental processes.",
        "cells": [
          "Integrated CRM, Purchase, Manufacturing & Inventory",
          "Connects customer relationships, procurement, production and stock on one Odoo Community platform, replacing disconnected departmental processes."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Purchase, manufacturing and inventory managed as separate processes Purchase, manufacturing and inventory integrated on one platform",
        "cells": [
          "Purchase, manufacturing and inventory managed as separate processes",
          "Purchase, manufacturing and inventory integrated on one platform"
        ]
      },
      {
        "type": "tr",
        "text": "Customer relationships tracked without a structured CRM Sales activity managed through a connected CRM",
        "cells": [
          "Customer relationships tracked without a structured CRM",
          "Sales activity managed through a connected CRM"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "With CRM, purchase, manufacturing and inventory integrated on Odoo Community, Millennium Forging's more than 50 active users now work from one connected system across defence and auto parts production."
      },
      {
        "type": "p",
        "text": "Procurement decisions are now made with visibility into production capacity, production schedules reflect actual incoming stock, and the sales team works from a structured, shared view of every customer relationship rather than reconstructing it from memory."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical drew on its manufacturing ERP implementation experience to connect procurement, production and inventory functions rather than leaving them as separate systems loosely coordinated by hand."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With CRM, purchase, manufacturing and inventory connected on one platform, the business has a foundation that can scale with order volume, without licensing constraints on users or expansion."
      }
    ]
  },
  {
    "slug": "powerpace-battery-manufacturer",
    "detailTitle": "Full Traceability from Cell to Finished Battery",
    "seoDescription": "A customized Odoo Community solution connecting dual-unit inventory, batch production, quality inspection, packaging and manufacturing costs.",
    "intro": "A customized Odoo Community solution connecting dual-unit inventory, batch production, quality inspection, packaging and manufacturing costs.",
    "meta": [
      {
        "label": "Industry",
        "value": "Battery Manufacturing"
      },
      {
        "label": "Users",
        "value": "50+ users"
      },
      {
        "label": "Platform",
        "value": "Odoo Manufacturing"
      },
      {
        "label": "Services",
        "value": "Consulting, Implementation & Customisation"
      }
    ],
    "contentBlocks": [
      {
        "type": "p",
        "text": "A customized Odoo Community solution connecting dual-unit inventory, batch production, quality inspection, packaging and manufacturing costs."
      },
      {
        "type": "tr",
        "text": "INDUSTRY Users",
        "cells": [
          "INDUSTRY",
          "Users"
        ]
      },
      {
        "type": "tr",
        "text": "Battery Manufacturing 50+ users",
        "cells": [
          "Battery Manufacturing",
          "50+ users"
        ]
      },
      {
        "type": "tr",
        "text": "PLATFORM Services",
        "cells": [
          "PLATFORM",
          "Services"
        ]
      },
      {
        "type": "tr",
        "text": "Odoo Manufacturing Consulting, Implementation & Customisation",
        "cells": [
          "Odoo Manufacturing",
          "Consulting, Implementation & Customisation"
        ]
      },
      {
        "type": "h3",
        "text": "About PowerPace"
      },
      {
        "type": "p",
        "text": "PowerPace operates in lithium-ion and LFP battery pack manufacturing, where individual cells, BMS units and multiple assembly operations come together to create finished battery packs."
      },
      {
        "type": "p",
        "text": "The manufacturing process required stronger traceability across component collection, capacity grading, IR testing, BMS testing, assembly, welding, wiring, final quality checks and packaging."
      },
      {
        "type": "p",
        "text": "Battery pack assembly sits in a category of manufacturing where the finished product is only ever as trustworthy as the paper trail behind it. A cell that tested marginally low on capacity, or a BMS unit swapped mid-build after a fault, isn't a detail that can be shrugged off once the pack is sealed and serialised it's exactly the kind of fact a warranty claim, a safety audit, or a recall investigation would need answered with certainty, not best guess."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "p",
        "text": "The manufacturing process required a controlled digital trail from incoming component to finished battery."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "No link from cell to finished batteryIndividual cells and BMS units moved through testing and assembly without any system connecting them to the finished pack they ended up inside. Finished packs could not be reliably connected to the cell batch or BMS unit used during assembly, leaving a gap at the exact point where traceability matters most.",
        "cells": [
          "No link from cell to finished batteryIndividual cells and BMS units moved through testing and assembly without any system connecting them to the finished pack they ended up inside.",
          "Finished packs could not be reliably connected to the cell batch or BMS unit used during assembly, leaving a gap at the exact point where traceability matters most."
        ]
      },
      {
        "type": "tr",
        "text": "Cell quality varied by batchIncoming cells differed in capacity and internal resistance from batch to batch, meaning not every cell was fit for every build without proper screening. Capacity grading and IR testing required controlled selection of suitable components, and without a structured process, that selection depended on manual diligence rather than an enforced system rule.",
        "cells": [
          "Cell quality varied by batchIncoming cells differed in capacity and internal resistance from batch to batch, meaning not every cell was fit for every build without proper screening.",
          "Capacity grading and IR testing required controlled selection of suitable components, and without a structured process, that selection depended on manual diligence rather than an enforced system rule."
        ]
      },
      {
        "type": "tr",
        "text": "Defects broke the paper trailWhen a cell or BMS unit failed during assembly, replacing it meant editing consumption records that had already been logged. Replacing defective components could require manual correction of consumption records, opening the door to exactly the kind of inconsistency a traceability system exists to prevent.",
        "cells": [
          "Defects broke the paper trailWhen a cell or BMS unit failed during assembly, replacing it meant editing consumption records that had already been logged.",
          "Replacing defective components could require manual correction of consumption records, opening the door to exactly the kind of inconsistency a traceability system exists to prevent."
        ]
      },
      {
        "type": "tr",
        "text": "No formal hold or reject pathA battery that failed final inspection had no defined next step in the system — no structured route back into rework, retesting or disassembly. Failed batteries needed a controlled route for rework, retesting or dismantling, and without one, handling a failure was improvised rather than repeatable.",
        "cells": [
          "No formal hold or reject pathA battery that failed final inspection had no defined next step in the system — no structured route back into rework, retesting or disassembly.",
          "Failed batteries needed a controlled route for rework, retesting or dismantling, and without one, handling a failure was improvised rather than repeatable."
        ]
      },
      {
        "type": "tr",
        "text": "Dispatch readiness wasn't trackedPackaged batteries sat in the same general stock regardless of whether they had cleared every check needed to ship. Finished batteries in packaging needed clear separation between ready-to-ship and on-hold stock, and without it, an on-hold unit risked being picked for dispatch by mistake.",
        "cells": [
          "Dispatch readiness wasn't trackedPackaged batteries sat in the same general stock regardless of whether they had cleared every check needed to ship.",
          "Finished batteries in packaging needed clear separation between ready-to-ship and on-hold stock, and without it, an on-hold unit risked being picked for dispatch by mistake."
        ]
      },
      {
        "type": "tr",
        "text": "Serials that told you nothingSerial numbers existed, but carried no embedded meaning about when or how a specific unit was built. Unique serials needed to support build-date and warranty identification, and a serial that couldn't answer those questions on sight added friction to every warranty and support conversation.",
        "cells": [
          "Serials that told you nothingSerial numbers existed, but carried no embedded meaning about when or how a specific unit was built.",
          "Unique serials needed to support build-date and warranty identification, and a serial that couldn't answer those questions on sight added friction to every warranty and support conversation."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "li",
        "text": "Establish a structured digital manufacturing workflow."
      },
      {
        "type": "li",
        "text": "Connect finished battery serials to the cells and BMS used during production."
      },
      {
        "type": "li",
        "text": "Guide operators through the required assembly sequence."
      },
      {
        "type": "li",
        "text": "Capture quality decisions directly against manufacturing records."
      },
      {
        "type": "li",
        "text": "Handle component defects and replacements while maintaining consumption accuracy."
      },
      {
        "type": "li",
        "text": "Create controlled Pass, Hold and Dismantle outcomes."
      },
      {
        "type": "li",
        "text": "Keep dispatch-ready and on-hold batteries clearly separated."
      },
      {
        "type": "li",
        "text": "Generate meaningful serial numbers automatically."
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "li",
        "text": "Odoo Manufacturing the core production and order workflow"
      },
      {
        "type": "li",
        "text": "Inventory & Stores component stock organized for traceable collection"
      },
      {
        "type": "li",
        "text": "Cell & BMS Tracking lot-level tracking of core components"
      },
      {
        "type": "li",
        "text": "Capacity Grading & IR Testing controlled selection of suitable cells"
      },
      {
        "type": "li",
        "text": "Guided Assembly a fixed operational sequence for every unit"
      },
      {
        "type": "li",
        "text": "Quality Control & Defect Handling structured inspection and rework paths"
      },
      {
        "type": "li",
        "text": "Packaging, Serialisation & Dispatch Readiness clean separation of sellable stock"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Jupical mapped the physical battery assembly process and translated its operational stages into a controlled Manufacturing Order workflow. Instead of forcing the client into a generic MRP process, the solution was designed around the actual production flow connecting component collection, testing, assembly, quality gates, defect handling, packaging and serialisation into one process."
      },
      {
        "type": "p",
        "text": "From component selection to final serial, every critical manufacturing event becomes part of the production record."
      },
      {
        "type": "h4",
        "text": "1. Mapping the physical assembly process"
      },
      {
        "type": "p",
        "text": "Jupical walked the full battery assembly line component collection, capacity grading, IR testing, BMS testing, assembly, welding, wiring, final quality checks and packaging to understand exactly which events needed to become part of a permanent digital record."
      },
      {
        "type": "p",
        "text": "This stage was as much about understanding failure paths as success paths: what actually happens on the floor when a cell fails IR testing, or a weld has to be redone, mattered just as much as the happy-path sequence."
      },
      {
        "type": "h4",
        "text": "2. Designing a Manufacturing Order workflow around real production"
      },
      {
        "type": "p",
        "text": "Rather than fitting the client into Odoo's standard MRP process, Jupical designed a Manufacturing Order structure around the actual sequence of operations, so the system reflected how batteries were really built rather than a generic assembly template."
      },
      {
        "type": "h4",
        "text": "3. Store-based cell and BMS collection"
      },
      {
        "type": "p",
        "text": "Components were organized into defined stores Capacity Grading, IR-Sorted, BMS Testing, BMS Sorted with lot-level tracking, so every cell and BMS unit entering assembly carried a traceable origin from the moment it was collected."
      },
      {
        "type": "h4",
        "text": "4. Building the guided assembly flow"
      },
      {
        "type": "p",
        "text": "The production process was structured into a controlled sequence collection, arrangement, spot welding, BMS wiring, final QC and packaging guiding operators through each stage rather than leaving sequence and completeness to manual discipline."
      },
      {
        "type": "h4",
        "text": "5. Defect handling built into the record"
      },
      {
        "type": "p",
        "text": "A structured scrap-and-replace workflow was built so that defective cells or BMS units could be swapped out mid-process while manufacturing consumption records stayed accurate removing the need for manual correction every time a component failed."
      },
      {
        "type": "h4",
        "text": "6. Three-way final QC and dispatch readiness"
      },
      {
        "type": "p",
        "text": "Final inspection was built to produce one of three controlled outcomes Pass, Hold or Dismantle each tied to its own stock movement, with packaged batteries routed into Ready-for-Dispatch or Hold locations so unfinished units could never enter sellable stock."
      },
      {
        "type": "h4",
        "text": "7. Automated, meaningful serialisation"
      },
      {
        "type": "p",
        "text": "Each finished battery was set to receive a unique, auto-generated serial number, sequenced to support build-date and warranty identification rather than being an arbitrary internal reference."
      },
      {
        "type": "h4",
        "text": "8. Validation, go-live and a scalable foundation"
      },
      {
        "type": "p",
        "text": "Testing followed full builds end to end component collection, grading, assembly, QC disposition, packaging and serial generation confirming every stage of the record stayed connected. Jupical supported go-live and refined the workflow as real production runs moved through it, leaving a structured ERP foundation built to support broader reporting and future process automation as the business grows."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Custom Solution What It Delivers",
        "cells": [
          "Custom Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Store-Based Cell & BMS Collection Components are collected from defined stores such as Capacity Grading, IR-Sorted, BMS Testing and BMS Sorted with lot-level tracking.",
        "cells": [
          "Store-Based Cell & BMS Collection",
          "Components are collected from defined stores such as Capacity Grading, IR-Sorted, BMS Testing and BMS Sorted with lot-level tracking."
        ]
      },
      {
        "type": "tr",
        "text": "Guided Assembly Flow The production process follows a controlled sequence covering collection, arrangement, spot welding, BMS wiring, final QC and packaging.",
        "cells": [
          "Guided Assembly Flow",
          "The production process follows a controlled sequence covering collection, arrangement, spot welding, BMS wiring, final QC and packaging."
        ]
      },
      {
        "type": "tr",
        "text": "Built-In Defect Handling Defective cells or BMS units can be scrapped and replaced while keeping manufacturing consumption records accurate.",
        "cells": [
          "Built-In Defect Handling",
          "Defective cells or BMS units can be scrapped and replaced while keeping manufacturing consumption records accurate."
        ]
      },
      {
        "type": "tr",
        "text": "Three-Way Final QC Final inspection provides controlled Pass, Hold and Dismantle outcomes, with the relevant stock movement connected to each result.",
        "cells": [
          "Three-Way Final QC",
          "Final inspection provides controlled Pass, Hold and Dismantle outcomes, with the relevant stock movement connected to each result."
        ]
      },
      {
        "type": "tr",
        "text": "Dispatch-Readiness Control Packaged batteries move into Ready-for-Dispatch or Hold locations so unfinished units do not enter sellable stock.",
        "cells": [
          "Dispatch-Readiness Control",
          "Packaged batteries move into Ready-for-Dispatch or Hold locations so unfinished units do not enter sellable stock."
        ]
      },
      {
        "type": "tr",
        "text": "Auto-Generated Serial Numbers Each finished battery receives a unique serial with sequencing designed to identify build date and warranty information.",
        "cells": [
          "Auto-Generated Serial Numbers",
          "Each finished battery receives a unique serial with sequencing designed to identify build date and warranty information."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Limited cell-to-battery traceability Lot-level traceability from components to finished serial",
        "cells": [
          "Limited cell-to-battery traceability",
          "Lot-level traceability from components to finished serial"
        ]
      },
      {
        "type": "tr",
        "text": "Manual handling of defective components Structured scrap and replacement workflow",
        "cells": [
          "Manual handling of defective components",
          "Structured scrap and replacement workflow"
        ]
      },
      {
        "type": "tr",
        "text": "No controlled QC disposition Pass / Hold / Dismantle workflow",
        "cells": [
          "No controlled QC disposition",
          "Pass / Hold / Dismantle workflow"
        ]
      },
      {
        "type": "tr",
        "text": "Dispatch readiness not clearly separated Ready-for-Dispatch and Hold locations",
        "cells": [
          "Dispatch readiness not clearly separated",
          "Ready-for-Dispatch and Hold locations"
        ]
      },
      {
        "type": "tr",
        "text": "Basic serial numbering Automated meaningful serial generation",
        "cells": [
          "Basic serial numbering",
          "Automated meaningful serial generation"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "The implementation established a stronger manufacturing record from raw component to finished battery."
      },
      {
        "type": "h4",
        "text": "Every battery traceable to its cells"
      },
      {
        "type": "p",
        "text": "Lot-level records connect the finished serial to the components used during production."
      },
      {
        "type": "h4",
        "text": "Defects handled without breaking"
      },
      {
        "type": "p",
        "text": "Scrap and replacement can be handled within the production process while keeping consumption accurate."
      },
      {
        "type": "h4",
        "text": "Controlled QC outcomes"
      },
      {
        "type": "p",
        "text": "Pass, Hold and Dismantle outcomes provide a structured route for finished batteries."
      },
      {
        "type": "h4",
        "text": "Dispatch-ready stock separated"
      },
      {
        "type": "p",
        "text": "Ready and on-hold batteries are kept apart to reduce the risk of mixed sellable inventory."
      },
      {
        "type": "p",
        "text": "Most importantly, previously disconnected manufacturing activities now operate through one structured workflow, providing stronger process control, traceability and a scalable foundation for future growth."
      },
      {
        "type": "p",
        "text": "What used to be a set of loosely connected shop-floor activities testing here, assembly there, packaging somewhere else, each with its own informal record is now one continuous digital thread. A single finished serial can answer, on demand, exactly which cells went into it, which BMS unit it paired with, what its quality disposition was, and when it was packaged, without anyone having to reconstruct that history after the fact."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical combined Odoo expertise with a practical understanding of manufacturing operations. The project was approached as a manufacturing-process transformation, not simply a standard software configuration."
      },
      {
        "type": "p",
        "text": "Every major enhancement from cell and BMS tracking to quality gates, defect handling, dispatch readiness and serialisation was designed around the battery assembly workflow."
      },
      {
        "type": "p",
        "text": "That distinction mattered here more than usual. A battery manufacturer doesn't just need software that records what happened it needs a system built with an understanding of why each of those records matters, from warranty defensibility to safety accountability, and designed so that capturing them doesn't slow the line down."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With its core battery manufacturing workflow connected through Odoo, PowerPace now has a structured ERP foundation capable of supporting stronger production control, improved traceability, broader reporting requirements and future process automation."
      }
    ]
  },
  {
    "slug": "indus-aushadhi-export-business",
    "detailTitle": "CRM, Sales, Procurement & Export Operations",
    "seoDescription": "A connected system for a growing export business.",
    "intro": "A connected system for a growing export business.",
    "meta": [
      {
        "label": "Platform",
        "value": "Odoo Community 19"
      },
      {
        "label": "Industry",
        "value": "Export Business"
      },
      {
        "label": "Services",
        "value": "Consulting & Custom Implementation"
      },
      {
        "label": "Location",
        "value": "India"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is an established spice manufacturing and export business that processes, packs and exports spice products to international buyers. Its operations span customer inquiry and quotation management, raw material procurement, quality-linked inventory, order fulfillment, and export documentation and compliance."
      },
      {
        "type": "p",
        "text": "As the client's export volumes and buyer base grew, coordinating sales, procurement and export operations across separate spreadsheets and manual processes became harder to sustain. Jupical implemented a customized Odoo Community 19 ERP so that CRM, sales, procurement and export operations could run from one connected system, supporting more than 30 active users."
      },
      {
        "type": "p",
        "text": "To respect commercial confidentiality, the client's identity and other identifiable business information have been protected under a non-disclosure agreement."
      },
      {
        "type": "h3",
        "text": "The Business Challenge."
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Disconnected Sales & Procurement Customer inquiries, quotations and confirmed export orders were tracked separately from raw material and packaging procurement, with no shared view connecting a sale to what needed to be sourced for it. Coordinating supply against confirmed export orders required manual cross-checking between sales and purchase teams, increasing the risk of delayed fulfillment.",
        "cells": [
          "Disconnected Sales & Procurement Customer inquiries, quotations and confirmed export orders were tracked separately from raw material and packaging procurement, with no shared view connecting a sale to what needed to be sourced for it.",
          "Coordinating supply against confirmed export orders required manual cross-checking between sales and purchase teams, increasing the risk of delayed fulfillment."
        ]
      },
      {
        "type": "tr",
        "text": "Manual Export Operations Tracking Export-specific activity shipment scheduling, documentation status, and order-to-dispatch progress was tracked without a structured system connecting it back to the original sales order. Status updates depended on manual follow-up between departments, making it difficult to give buyers or management a reliable answer on where an order stood.",
        "cells": [
          "Manual Export Operations Tracking Export-specific activity shipment scheduling, documentation status, and order-to-dispatch progress was tracked without a structured system connecting it back to the original sales order.",
          "Status updates depended on manual follow-up between departments, making it difficult to give buyers or management a reliable answer on where an order stood."
        ]
      },
      {
        "type": "tr",
        "text": "No Single View Across the Order Lifecycle A single export deal touched CRM, sales, procurement and export functions, but each stage lived in its own process with no consistent thread connecting inquiry through to shipment. Management had no easy way to see how a deal was progressing end to end without checking with multiple teams individually.",
        "cells": [
          "No Single View Across the Order Lifecycle A single export deal touched CRM, sales, procurement and export functions, but each stage lived in its own process with no consistent thread connecting inquiry through to shipment.",
          "Management had no easy way to see how a deal was progressing end to end without checking with multiple teams individually."
        ]
      },
      {
        "type": "tr",
        "text": "Growing Complexity at Scale As the number of active buyers and orders grew past what informal tracking could reasonably handle, the gap between the business's actual size and the tools supporting it widened. The business risked outgrowing its own operational tooling just as export volume was accelerating.",
        "cells": [
          "Growing Complexity at Scale As the number of active buyers and orders grew past what informal tracking could reasonably handle, the gap between the business's actual size and the tools supporting it widened.",
          "The business risked outgrowing its own operational tooling just as export volume was accelerating."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to implement a connected ERP that would bring CRM, sales, procurement and export operations together on a single platform, giving the team one consistent view of every deal from first inquiry through to export fulfillment."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Establish a single source of accurate information across CRM, sales, procurement and export functions"
      },
      {
        "type": "li",
        "text": "Connect confirmed sales orders directly with procurement and material planning"
      },
      {
        "type": "li",
        "text": "Provide clear, trackable visibility into export order status and progress"
      },
      {
        "type": "li",
        "text": "Reduce reliance on manual cross-checking between sales and procurement teams"
      },
      {
        "type": "li",
        "text": "Support the business's growing volume of buyers and orders without adding administrative overhead"
      },
      {
        "type": "li",
        "text": "Build a connected foundation that scales with export order volume"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Jupical implemented a customized Odoo Community 19 ERP connecting the client's core business functions on one platform."
      },
      {
        "type": "p",
        "text": "The implementation covered:"
      },
      {
        "type": "li",
        "text": "CRM and customer inquiry management"
      },
      {
        "type": "li",
        "text": "Sales order management"
      },
      {
        "type": "li",
        "text": "Procurement and vendor coordination"
      },
      {
        "type": "li",
        "text": "Export operations tracking"
      },
      {
        "type": "li",
        "text": "Role-based access across CRM, sales, procurement and export teams"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "h4",
        "text": "1. Process Discovery and Gap Analysis"
      },
      {
        "type": "p",
        "text": "Jupical began by understanding how the client's team actually managed the path from customer inquiry to export fulfillment where information was tracked, where handoffs between sales and procurement happened, and where export status updates were getting lost between departments. This discovery phase identified the specific gaps between CRM, sales, procurement and export tracking that the new system needed to close."
      },
      {
        "type": "h4",
        "text": "2. Solution Design Around the Export Order Lifecycle"
      },
      {
        "type": "p",
        "text": "Rather than configuring generic CRM and sales modules in isolation, Jupical designed the solution around the client's actual order lifecycle from customer inquiry and quotation, through confirmed sales order, into procurement, and finally export tracking so that each stage stayed connected to the one before it."
      },
      {
        "type": "h4",
        "text": "3. Odoo Community 19 Configuration"
      },
      {
        "type": "p",
        "text": "Jupical configured Odoo Community 19 to connect CRM, sales, procurement and export operations on one platform, giving the team a single, consistent source of information for every deal instead of separate, disconnected records."
      },
      {
        "type": "h4",
        "text": "4. Export Operations Tracking"
      },
      {
        "type": "p",
        "text": "A structured export operations layer was built to keep shipment and documentation status connected to the original sales order, so that anyone on the team could see where a given export order stood without chasing down updates manually."
      },
      {
        "type": "h4",
        "text": "5. Role-Based Access for CRM, Sales, Procurement and Export Teams"
      },
      {
        "type": "p",
        "text": "Access was structured so that CRM, sales, procurement and export teams each work within the same connected system while seeing the information relevant to their role."
      },
      {
        "type": "h4",
        "text": "6. Validation Against Real Order Scenarios"
      },
      {
        "type": "p",
        "text": "The implementation was tested against real inquiry-to-export scenarios rather than individual functions in isolation, confirming that a deal could be tracked accurately from initial customer inquiry all the way through to export fulfillment."
      },
      {
        "type": "h4",
        "text": "7. Training and Adoption"
      },
      {
        "type": "p",
        "text": "Role-specific training was provided so that CRM, sales, procurement and export teams understood both the new system and how their part of the process now connected to the rest of the order lifecycle, supporting adoption across more than 30 active users."
      },
      {
        "type": "h4",
        "text": "8. Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "The implementation was built as a foundation the client can grow into, not a fixed, one-time setup able to accommodate more buyers, more orders and more export volume as the business scales."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Integrated CRM, Sales & Procurement Connects customer relationships, confirmed sales orders and procurement activity on one Odoo Community 19 platform, so a confirmed export deal is automatically visible to the procurement team responsible for sourcing against it.",
        "cells": [
          "Integrated CRM, Sales & Procurement",
          "Connects customer relationships, confirmed sales orders and procurement activity on one Odoo Community 19 platform, so a confirmed export deal is automatically visible to the procurement team responsible for sourcing against it."
        ]
      },
      {
        "type": "tr",
        "text": "Export Operations Tracking Brings export order tracking into the same connected system as sales and procurement, so shipment and documentation status stay linked to the original sales order rather than tracked separately.",
        "cells": [
          "Export Operations Tracking",
          "Brings export order tracking into the same connected system as sales and procurement, so shipment and documentation status stay linked to the original sales order rather than tracked separately."
        ]
      },
      {
        "type": "tr",
        "text": "Single Order-Lifecycle View Gives the team one consistent view of a deal from first customer inquiry through confirmed sale, procurement, and export fulfillment, instead of piecing the picture together across departments.",
        "cells": [
          "Single Order-Lifecycle View",
          "Gives the team one consistent view of a deal from first customer inquiry through confirmed sale, procurement, and export fulfillment, instead of piecing the picture together across departments."
        ]
      },
      {
        "type": "tr",
        "text": "Role-Based Access Across Teams Structures the platform so CRM, sales, procurement and export teams all work from the same data with access appropriate to their role.",
        "cells": [
          "Role-Based Access Across Teams",
          "Structures the platform so CRM, sales, procurement and export teams all work from the same data with access appropriate to their role."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Implementation",
        "cells": [
          "Before Implementation",
          "After Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Sales and procurement managed as separate processes, requiring manual cross-checking to coordinate supply against confirmed orders. Sales and procurement are integrated on one platform, with confirmed orders visible directly to the procurement team.",
        "cells": [
          "Sales and procurement managed as separate processes, requiring manual cross-checking to coordinate supply against confirmed orders.",
          "Sales and procurement are integrated on one platform, with confirmed orders visible directly to the procurement team."
        ]
      },
      {
        "type": "tr",
        "text": "Export operations were tracked without a connected system, relying on manual follow-up for shipment and documentation status. Export operations are tracked within the same ERP as sales and procurement, connected back to the original order.",
        "cells": [
          "Export operations were tracked without a connected system, relying on manual follow-up for shipment and documentation status.",
          "Export operations are tracked within the same ERP as sales and procurement, connected back to the original order."
        ]
      },
      {
        "type": "tr",
        "text": "No single view connected a deal across CRM, sales, procurement and export stages. The full order lifecycle inquiry to export is visible from one connected system.",
        "cells": [
          "No single view connected a deal across CRM, sales, procurement and export stages.",
          "The full order lifecycle inquiry to export is visible from one connected system."
        ]
      },
      {
        "type": "tr",
        "text": "Growing order volume was straining informal, manual tracking methods. The platform supports more than 30 active users and is built to scale with export order volume.",
        "cells": [
          "Growing order volume was straining informal, manual tracking methods.",
          "The platform supports more than 30 active users and is built to scale with export order volume."
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "With CRM, sales, procurement and export operations integrated on Odoo Community 19, the client's more than 30 active users now work from one connected system across the entire export order lifecycle. Deals that once required manual coordination between departments now move through a single, consistent platform, from the moment a customer inquiry comes in to the point an export order ships."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical customized the ERP around this specific export business rather than deploying a generic CRM and calling it an export solution connecting sales and procurement with export operations tracking so that the system reflects how an export deal actually moves through the organization."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With sales, procurement and export operations connected on one platform, the business has a foundation that can scale with export order volume as its buyer base and shipment activity continue to grow."
      }
    ]
  },
  {
    "slug": "procom-entertainment-technology-solutions-provider",
    "detailTitle": "An 8+ Year Odoo Partnership, v9 to v18",
    "seoDescription": "One system, grown module by module, version by version, since 2016.",
    "intro": "One system, grown module by module, version by version, since 2016.",
    "meta": [
      {
        "label": "Services",
        "value": "Long-Term Consulting, Custom Development & Continuous ERP Evolution"
      },
      {
        "label": "Industry",
        "value": "Entertainment Technology Solutions"
      },
      {
        "label": "Location",
        "value": "Middle East"
      },
      {
        "label": "Platform",
        "value": "Odoo Community (v9 through v18)"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "Procom Middle East is an entertainment technology solutions provider, running its business end-to-end on a fully customized Odoo ERP built and maintained by Jupical since 2016 a partnership that has carried the system through eight major Odoo versions, from v9 to v18, and now supports more than 120 active users."
      },
      {
        "type": "p",
        "text": "To respect commercial confidentiality, the client's identity and other identifiable business information have been protected under a non-disclosure agreement."
      },
      {
        "type": "h3",
        "text": "The Business Challenge"
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Multi-Functional Business Complexity The business needed to manage sales and CRM, purchasing, inventory, manufacturing (including BOM/CAD-driven cable and product builds), accounting, after-sales service and repair, customs clearance for imported equipment, and HR and payroll all as a single entertainment technology operation. Running each function as a separate system risked workflow gaps and disconnected reporting across a business that needed all of these functions to work together.",
        "cells": [
          "Multi-Functional Business Complexity The business needed to manage sales and CRM, purchasing, inventory, manufacturing (including BOM/CAD-driven cable and product builds), accounting, after-sales service and repair, customs clearance for imported equipment, and HR and payroll all as a single entertainment technology operation.",
          "Running each function as a separate system risked workflow gaps and disconnected reporting across a business that needed all of these functions to work together."
        ]
      },
      {
        "type": "tr",
        "text": "Keeping Pace with Platform Evolution As Odoo itself progressed from v9 through v18 over the years, a system left static would fall further behind each major release. A one-time implementation would not have kept pace; the ERP needed to evolve continuously alongside both the platform and the business.",
        "cells": [
          "Keeping Pace with Platform Evolution As Odoo itself progressed from v9 through v18 over the years, a system left static would fall further behind each major release.",
          "A one-time implementation would not have kept pace; the ERP needed to evolve continuously alongside both the platform and the business."
        ]
      },
      {
        "type": "tr",
        "text": "Disconnected External Channels Customers and partners were already communicating and transacting through external platforms WhatsApp, WooCommerce, Salesforce and Slack separate from the core ERP. Without native integration, staff had to work across multiple disconnected tools instead of one connected system.",
        "cells": [
          "Disconnected External Channels Customers and partners were already communicating and transacting through external platforms WhatsApp, WooCommerce, Salesforce and Slack separate from the core ERP.",
          "Without native integration, staff had to work across multiple disconnected tools instead of one connected system."
        ]
      },
      {
        "type": "tr",
        "text": "Growing Operational Scale As the business expanded, its product lines, service ticket volume, and number of integration points all grew in parallel. The ERP needed continuous extension to keep up with a business that was not standing still.",
        "cells": [
          "Growing Operational Scale As the business expanded, its product lines, service ticket volume, and number of integration points all grew in parallel.",
          "The ERP needed continuous extension to keep up with a business that was not standing still."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The objective was not a single implementation but a sustained partnership that would let the client's ERP grow in step with the business itself."
      },
      {
        "type": "p",
        "text": "The engagement aimed to:"
      },
      {
        "type": "li",
        "text": "Run the full business sales, purchase, inventory, manufacturing, accounting, service, HR/payroll on one connected Odoo platform."
      },
      {
        "type": "li",
        "text": "Extend standard Odoo with business-specific workflows, approvals, and reporting rather than working around a generic setup."
      },
      {
        "type": "li",
        "text": "Keep the system current through successive Odoo versions without disrupting daily operations."
      },
      {
        "type": "li",
        "text": "Connect Odoo to the external systems Procom's customers and partners already use WhatsApp, WooCommerce, Salesforce and Slack."
      },
      {
        "type": "li",
        "text": "Support entertainment-technology-specific needs like service/repair ticketing, custom clearance documentation, and BOM/CAD-driven manufacturing."
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "li",
        "text": "Sales & CRM (quotations, approvals, customer-specific pricing)"
      },
      {
        "type": "li",
        "text": "Purchase (vendor management, downpayments, PO customization)"
      },
      {
        "type": "li",
        "text": "Inventory (barcode, landed cost, stock notifications)"
      },
      {
        "type": "li",
        "text": "Products (analytics, ranking, accessories, brand management)"
      },
      {
        "type": "li",
        "text": "Manufacturing (BOM/CAD integration, cable-specific workflows)"
      },
      {
        "type": "li",
        "text": "Accounting (PDC/cheque management, reconciliation, financial reporting)"
      },
      {
        "type": "li",
        "text": "Service Management (repair/service tickets, after-service automation)"
      },
      {
        "type": "li",
        "text": "Custom Clearance (BOE and clearance documentation)"
      },
      {
        "type": "li",
        "text": "HR & Payroll (attendance, leave, payroll processing and reporting)"
      },
      {
        "type": "li",
        "text": "Projects (integrated with sales, service, expenses and deliveries)"
      },
      {
        "type": "li",
        "text": "Third-Party Integrations (WhatsApp, WooCommerce, Salesforce, Slack)"
      },
      {
        "type": "li",
        "text": "Reporting & Automation (Excel/PDF reports, webhooks, scheduled activities)"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "h4",
        "text": "1. Understanding the Business Behind the System"
      },
      {
        "type": "p",
        "text": "Rather than treating this as a single implementation project, Jupical approached the engagement as a continuous, long-term partnership starting with a deep understanding of how an entertainment technology business actually operates across sales, service, manufacturing and support."
      },
      {
        "type": "h4",
        "text": "2. Building Function-Specific Customizations"
      },
      {
        "type": "p",
        "text": "Each functional area of the business sales, purchase, inventory, manufacturing, service, accounting, HR received its own set of purpose-built customizations, extending standard Odoo functionality with the approvals, reports, automation and workflows specific to how the client actually operates."
      },
      {
        "type": "h4",
        "text": "3. Carrying Customizations Through Successive Odoo Versions"
      },
      {
        "type": "p",
        "text": "As Odoo progressed from v9 to v18, Jupical carried these customizations forward version by version, ensuring each upgrade preserved the business-specific workflows already built rather than forcing a rebuild from scratch."
      },
      {
        "type": "h4",
        "text": "4. Connecting External Communication & Sales Channels"
      },
      {
        "type": "p",
        "text": "WhatsApp, WooCommerce, Salesforce and Slack were each connected directly into the ERP, so that staff could work from one system rather than switching between the core platform and separate external tools."
      },
      {
        "type": "h4",
        "text": "5. Extending into Service, Compliance and Manufacturing-Specific Needs"
      },
      {
        "type": "p",
        "text": "Beyond core ERP functions, Jupical built dedicated capability for service and repair ticket management, customs clearance and Bill of Entry documentation, and BOM/CAD-driven manufacturing workflows  addressing needs specific to entertainment technology distribution and service."
      },
      {
        "type": "h4",
        "text": "6. Continuous Capability Growth Alongside the Business"
      },
      {
        "type": "p",
        "text": "As the client's business grew more product lines, more service tickets, more integration points new capability was added to the system incrementally, rather than waiting for a periodic large-scale overhaul."
      },
      {
        "type": "h4",
        "text": "7. Sustained Support Across Version Upgrades"
      },
      {
        "type": "p",
        "text": "Each Odoo version upgrade, from v9 through v18, was managed as part of the ongoing partnership, so the client's system stayed current without disrupting daily operations."
      },
      {
        "type": "h4",
        "text": "8. A Foundation Designed to Keep Evolving"
      },
      {
        "type": "p",
        "text": "The engagement was never built as a fixed, one-time setup every module and integration was designed with the expectation that the business, and the platform beneath it, would keep changing."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Sales Order Approval & Extended Sales Workflows Structured approval workflows and extended functionality beyond standard Odoo quotation handling.",
        "cells": [
          "Sales Order Approval & Extended Sales Workflows",
          "Structured approval workflows and extended functionality beyond standard Odoo quotation handling."
        ]
      },
      {
        "type": "tr",
        "text": "Customer-Specific Pricing Customized sales pricing logic tailored to individual customers and deals.",
        "cells": [
          "Customer-Specific Pricing",
          "Customized sales pricing logic tailored to individual customers and deals."
        ]
      },
      {
        "type": "tr",
        "text": "Product Master Extensions Extended product data fields and structure to support Procom's specific product catalog needs.",
        "cells": [
          "Product Master Extensions",
          "Extended product data fields and structure to support Procom's specific product catalog needs."
        ]
      },
      {
        "type": "tr",
        "text": "Product & Customer Analytics Deeper visibility into sales performance by product and by customer.",
        "cells": [
          "Product & Customer Analytics",
          "Deeper visibility into sales performance by product and by customer."
        ]
      },
      {
        "type": "tr",
        "text": "Automated Product Ranking Product ranking generated automatically from performance data.",
        "cells": [
          "Automated Product Ranking",
          "Product ranking generated automatically from performance data."
        ]
      },
      {
        "type": "tr",
        "text": "Automatic Accessory Handling Automatically surfaces relevant accessories at the point of sale.",
        "cells": [
          "Automatic Accessory Handling",
          "Automatically surfaces relevant accessories at the point of sale."
        ]
      },
      {
        "type": "tr",
        "text": "Customized Purchase Workflows Tailored purchase order processes, including vendor due-payment reporting and purchase downpayments.",
        "cells": [
          "Customized Purchase Workflows",
          "Tailored purchase order processes, including vendor due-payment reporting and purchase downpayments."
        ]
      },
      {
        "type": "tr",
        "text": "Extended Inventory & Landed Cost Extended inventory functionality including landed cost handling beyond standard Odoo inventory.",
        "cells": [
          "Extended Inventory & Landed Cost",
          "Extended inventory functionality including landed cost handling beyond standard Odoo inventory."
        ]
      },
      {
        "type": "tr",
        "text": "Service & Repair Management Complete service and repair ticket management, including service parts and after-service automation, tailored to entertainment technology equipment.",
        "cells": [
          "Service & Repair Management",
          "Complete service and repair ticket management, including service parts and after-service automation, tailored to entertainment technology equipment."
        ]
      },
      {
        "type": "tr",
        "text": "Custom Clearance & BOE Management Custom clearance and Bill of Entry documentation, connected to related stock, purchase and sales workflows.",
        "cells": [
          "Custom Clearance & BOE Management",
          "Custom clearance and Bill of Entry documentation, connected to related stock, purchase and sales workflows."
        ]
      },
      {
        "type": "tr",
        "text": "Integrated Project Management Project management integrated directly with sales, service, expenses, deliveries and customers.",
        "cells": [
          "Integrated Project Management",
          "Project management integrated directly with sales, service, expenses, deliveries and customers."
        ]
      },
      {
        "type": "tr",
        "text": "BOM/CAD Data Integration Raw BOM and CAD data integration via webhook, supporting cable and product manufacturing workflows.",
        "cells": [
          "BOM/CAD Data Integration",
          "Raw BOM and CAD data integration via webhook, supporting cable and product manufacturing workflows."
        ]
      },
      {
        "type": "tr",
        "text": "Product Data Synchronization Webhook-based product data synchronization with external systems.",
        "cells": [
          "Product Data Synchronization",
          "Webhook-based product data synchronization with external systems."
        ]
      },
      {
        "type": "tr",
        "text": "Salesforce Integration OAuth-based synchronization of companies, contacts and sales-related information with Salesforce.",
        "cells": [
          "Salesforce Integration",
          "OAuth-based synchronization of companies, contacts and sales-related information with Salesforce."
        ]
      },
      {
        "type": "tr",
        "text": "WooCommerce Integration Product and order synchronization between Odoo and WooCommerce.",
        "cells": [
          "WooCommerce Integration",
          "Product and order synchronization between Odoo and WooCommerce."
        ]
      },
      {
        "type": "tr",
        "text": "WhatsApp Integration Automated messaging sent directly from Odoo business documents via WhatsApp.",
        "cells": [
          "WhatsApp Integration",
          "Automated messaging sent directly from Odoo business documents via WhatsApp."
        ]
      },
      {
        "type": "h3",
        "text": "An Ongoing, Evolving Partnership"
      },
      {
        "type": "p",
        "text": "Because this is a continuous engagement rather than a single project, \"before and after\" doesn't quite capture it  the story is more that Procom's ERP has grown in step with the business itself, module by module and Odoo version by version, for eight years and counting. Sales approvals, service ticketing, customs clearance, payroll, and four separate external integrations all now run inside the same system that started with the core Odoo functionality back in v9."
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "Procom now runs sales, purchasing, inventory, manufacturing, accounting, service management, customs clearance, HR/payroll, and project delivery on one connected Odoo platform, supporting more than 120 active users, with WhatsApp, WooCommerce, Salesforce and Slack all wired directly into daily operations. The system has been carried forward through eight major Odoo versions without a disruptive re-platforming."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "An 8-year, multi-version partnership isn't something a one-off implementation vendor can sustain. Jupical's ongoing relationship with Procom means every new module or integration is built with full context on the 15+ years of prior customization already in place extending the system coherently rather than bolting on disconnected pieces."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With a deep library of purpose-built modules and a track record of carrying the system through successive Odoo versions, Procom has an ERP foundation built to keep evolving with the business, not one it will need to replace as it grows."
      }
    ]
  },
  {
    "slug": "srn-integrated-financial-services",
    "detailTitle": "Elevating Operations: A Success Story in CMS and Loan Management Innovation",
    "seoDescription": "Bringing content management and loan processing together on one integrated platform.",
    "intro": "Bringing content management and loan processing together on one integrated platform.",
    "meta": [
      {
        "label": "Industry",
        "value": "Co-operative Management / Loan Services"
      },
      {
        "label": "Services",
        "value": "Consulting & Custom Implementation"
      },
      {
        "label": "Location",
        "value": "India"
      },
      {
        "label": "Platform",
        "value": "Odoo Enterprise 18"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client runs a co-operative management system alongside a loan servicing operation, managing both the content it presents to its members and customers and the full loan application and servicing process behind it. As the business grew, both sides of the operation needed to work faster, more accurately and more securely than the tools they were using could support."
      },
      {
        "type": "p",
        "text": "Jupical implemented a connected Odoo Enterprise 18 platform that brought content management, customer records and loan processing together, now supporting 15 active users."
      },
      {
        "type": "p",
        "text": "To respect commercial confidentiality, the client's identity and other identifiable business information have been protected under a non-disclosure agreement."
      },
      {
        "type": "h3",
        "text": "The Challenges"
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "A CMS That Lagged Behind the Business Updating content required manual fixes, and the system itself was complex enough that the client's own team found it hard to manage efficiently. Outdated information reached members and customers, affecting engagement and trust, and website performance suffered as the content backlog grew.",
        "cells": [
          "A CMS That Lagged Behind the Business Updating content required manual fixes, and the system itself was complex enough that the client's own team found it hard to manage efficiently.",
          "Outdated information reached members and customers, affecting engagement and trust, and website performance suffered as the content backlog grew."
        ]
      },
      {
        "type": "tr",
        "text": "Manual, Error-Prone Loan Processing Loan applications and customer data were handled through manual processes that consumed significant staff time and left room for entry errors at every step. Approvals slowed down, turnaround times stretched, and the client could handle fewer applications with the resources it had.",
        "cells": [
          "Manual, Error-Prone Loan Processing Loan applications and customer data were handled through manual processes that consumed significant staff time and left room for entry errors at every step.",
          "Approvals slowed down, turnaround times stretched, and the client could handle fewer applications with the resources it had."
        ]
      },
      {
        "type": "tr",
        "text": "Customer and Loan Data Scattered Across Systems Information about a single customer and their loans lived across different platforms, so staff had to cross-reference records manually to build a complete picture. Inefficiency and delay in everyday servicing, and no reliable single view of a customer's full relationship with the business.",
        "cells": [
          "Customer and Loan Data Scattered Across Systems Information about a single customer and their loans lived across different platforms, so staff had to cross-reference records manually to build a complete picture.",
          "Inefficiency and delay in everyday servicing, and no reliable single view of a customer's full relationship with the business."
        ]
      },
      {
        "type": "tr",
        "text": "Elevated Data Security Risk With sensitive customer and loan data spread across multiple systems, protecting it consistently was harder, and gaining a complete view of client details was difficult. Increased exposure to data security incidents and weaker control over who could see what, and where.",
        "cells": [
          "Elevated Data Security Risk With sensitive customer and loan data spread across multiple systems, protecting it consistently was harder, and gaining a complete view of client details was difficult.",
          "Increased exposure to data security incidents and weaker control over who could see what, and where."
        ]
      },
      {
        "type": "tr",
        "text": "Poorly Integrated Systems Existing systems did not exchange data with one another, so information could not flow smoothly between departments. Workflow and communication between teams were disrupted, with duplicated effort and delayed handoffs.",
        "cells": [
          "Poorly Integrated Systems Existing systems did not exchange data with one another, so information could not flow smoothly between departments.",
          "Workflow and communication between teams were disrupted, with duplicated effort and delayed handoffs."
        ]
      },
      {
        "type": "tr",
        "text": "No Reporting to Guide Decisions Without consolidated data, there was no reliable way to monitor performance or spot trends across the loan portfolio and customer base. Decisions relied on partial information rather than on a clear, current picture of the business.",
        "cells": [
          "No Reporting to Guide Decisions Without consolidated data, there was no reliable way to monitor performance or spot trends across the loan portfolio and customer base.",
          "Decisions relied on partial information rather than on a clear, current picture of the business."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to solve the content and loan servicing problems together, on one connected platform, rather than patching each issue in isolation."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Rebuild the CMS so content updates keep pace with the growing business."
      },
      {
        "type": "li",
        "text": "Merge customer and loan information into a single system."
      },
      {
        "type": "li",
        "text": "Reduce manual errors and speed up loan processing turnaround time."
      },
      {
        "type": "li",
        "text": "Strengthen data security around customer and loan information."
      },
      {
        "type": "li",
        "text": "Give the client reporting and analytics to monitor performance and make confident decisions."
      },
      {
        "type": "li",
        "text": "Integrate all existing systems onto one platform so data flows between departments."
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Jupical delivered an integrated Odoo Enterprise 18 solution covering both the content and the loan servicing sides of the business."
      },
      {
        "type": "p",
        "text": "The implementation covered:"
      },
      {
        "type": "li",
        "text": "Rebuilt CMS with Content Dashboards"
      },
      {
        "type": "li",
        "text": "Unified customer and loan data system"
      },
      {
        "type": "li",
        "text": "Custom reporting and analytics dashboard"
      },
      {
        "type": "li",
        "text": "Cross-Department System Integration"
      },
      {
        "type": "li",
        "text": "Loan process automation"
      },
      {
        "type": "li",
        "text": "Data Security Hardening"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Jupical addressed both sides of the problem together rather than in isolation. A new CMS was built to let the client update content quickly as the company grows, with easy-to-use dashboards for monitoring content. On the loan side, customer and loan information were merged into one system, streamlining the application process and reducing errors, with strong security measures added to protect the data."
      },
      {
        "type": "p",
        "text": "A custom analytics dashboard was built on top, giving the client reporting to monitor performance and make confident decisions, with staff able to quickly access the information they needed. Finally, all existing systems were integrated onto one platform, enabling data to flow between departments and improving communication and coordination across the organization. Key processes within the loan management system were automated to reduce manual errors and processing times."
      },
      {
        "type": "h4",
        "text": "1. Process Discovery and Gap Analysis"
      },
      {
        "type": "p",
        "text": "Jupical began by mapping how content was published, how a loan moved from application to servicing, and where information was being re-keyed or cross-checked by hand. This exposed the points where the CMS, the loan process and the surrounding systems were failing to work together."
      },
      {
        "type": "h4",
        "text": "2. One Solution for Two Connected Problems"
      },
      {
        "type": "p",
        "text": "Rather than treating the CMS and the loan system as separate projects, Jupical designed a single solution so that content, customer records and loan data would share the same foundation, avoiding a new set of disconnected tools."
      },
      {
        "type": "h4",
        "text": "3. CMS Rebuild with Content Dashboards"
      },
      {
        "type": "p",
        "text": "A new CMS was built so the client's own team can update content quickly as the company grows, with easy-to-use dashboards for monitoring what is published and keeping information current."
      },
      {
        "type": "h4",
        "text": "4. Unifying Customer and Loan Data"
      },
      {
        "type": "p",
        "text": "Customer and loan information that previously sat in different places was merged into one system. Staff now find everything about a customer and their loans in one place, which streamlines the application process and reduces the errors that came from re-entering data."
      },
      {
        "type": "h4",
        "text": "5. Loan Process Automation"
      },
      {
        "type": "p",
        "text": "Key steps within the loan management workflow were automated to reduce manual handling, cut processing times and lower the risk of mistakes, so applications move through approval faster and more consistently."
      },
      {
        "type": "h4",
        "text": "6. Security Hardening"
      },
      {
        "type": "p",
        "text": "With data consolidated, stronger security measures were applied to protect customer and loan information, replacing the uneven protection that came from data being spread across several platforms."
      },
      {
        "type": "h4",
        "text": "7. Analytics, Integration and Adoption"
      },
      {
        "type": "p",
        "text": "A custom analytics dashboard gave the client reporting to monitor performance and make confident decisions, while all existing systems were integrated onto one platform so data flows between departments. Role-based training helped the team adopt the new way of working."
      },
      {
        "type": "h4",
        "text": "8. Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "The platform was built as a foundation the client can grow into, able to handle more applications and more customers without a proportional increase in manual effort."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "New CMS with Content Dashboards Lets the client update content quickly as the company grows, with easy-to-use dashboards for monitoring content.",
        "cells": [
          "New CMS with Content Dashboards",
          "Lets the client update content quickly as the company grows, with easy-to-use dashboards for monitoring content."
        ]
      },
      {
        "type": "tr",
        "text": "Unified Customer & Loan System Merges customer and loan information into one system, streamlining the loan application process, reducing errors, and giving staff access to information in one place.",
        "cells": [
          "Unified Customer & Loan System",
          "Merges customer and loan information into one system, streamlining the loan application process, reducing errors, and giving staff access to information in one place."
        ]
      },
      {
        "type": "tr",
        "text": "Strengthened Data Security Adds stronger security measures to protect customer and loan data previously spread across multiple systems.",
        "cells": [
          "Strengthened Data Security",
          "Adds stronger security measures to protect customer and loan data previously spread across multiple systems."
        ]
      },
      {
        "type": "tr",
        "text": "Custom Analytics Dashboard Provides reporting and analytics so the client can monitor performance and make confident decisions, with quick staff access to key information.",
        "cells": [
          "Custom Analytics Dashboard",
          "Provides reporting and analytics so the client can monitor performance and make confident decisions, with quick staff access to key information."
        ]
      },
      {
        "type": "tr",
        "text": "Cross-System Integration Integrates all existing systems onto one platform, enabling data to flow between departments and improving communication and coordination.",
        "cells": [
          "Cross-System Integration",
          "Integrates all existing systems onto one platform, enabling data to flow between departments and improving communication and coordination."
        ]
      },
      {
        "type": "tr",
        "text": "Loan Process Automation Automates key processes within the loan management system to reduce manual errors and processing times.",
        "cells": [
          "Loan Process Automation",
          "Automates key processes within the loan management system to reduce manual errors and processing times."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Content updates required manual fixes, leading to outdated information New CMS lets content be updated quickly, with dashboards for monitoring",
        "cells": [
          "Content updates required manual fixes, leading to outdated information",
          "New CMS lets content be updated quickly, with dashboards for monitoring"
        ]
      },
      {
        "type": "tr",
        "text": "Loan and customer data managed manually, prone to errors Customer and loan information merged into one streamlined system",
        "cells": [
          "Loan and customer data managed manually, prone to errors",
          "Customer and loan information merged into one streamlined system"
        ]
      },
      {
        "type": "tr",
        "text": "Data scattered across multiple systems, raising security risk Strong security measures protecting unified data",
        "cells": [
          "Data scattered across multiple systems, raising security risk",
          "Strong security measures protecting unified data"
        ]
      },
      {
        "type": "tr",
        "text": "No reporting or analytics to monitor performance Custom dashboard providing reporting and analytics",
        "cells": [
          "No reporting or analytics to monitor performance",
          "Custom dashboard providing reporting and analytics"
        ]
      },
      {
        "type": "tr",
        "text": "Systems poorly integrated, disrupting workflow between departments All systems integrated onto one platform, improving cross-department coordination",
        "cells": [
          "Systems poorly integrated, disrupting workflow between departments",
          "All systems integrated onto one platform, improving cross-department coordination"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "By simplifying processes, the client saved significant time. Loan processing became faster, reducing turnaround time and improving customer satisfaction. The streamlined workflow let the client handle more applications with the same resources, and the client now has a comprehensive view of each customer's journey."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical treated the CMS and loan management problems as connected, not separate. By rebuilding content management, unifying loan and customer data, and integrating every existing system onto one platform, rather than patching each issue individually, the client ended up with a single foundation instead of a collection of fixes."
      },
      {
        "type": "h3",
        "text": "Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With content, customer records and loan processing running on one connected platform, the client is positioned to grow its member and customer base without its systems, or its manual workload, growing at the same pace."
      }
    ]
  },
  {
    "slug": "shivansh-packaging-solutions",
    "detailTitle": "CRM & Custom Website for a Silica Gel Manufacturer",
    "seoDescription": "Sales management and a digital presence, built together.",
    "intro": "Sales management and a digital presence, built together.",
    "meta": [
      {
        "label": "Platform",
        "value": "Odoo Community (CRM) + Custom Website"
      },
      {
        "label": "Industry",
        "value": "Packaging Solutions (Silica Gel Manufacturing)"
      },
      {
        "label": "Services",
        "value": "Consulting, Implementation & Website Development"
      },
      {
        "label": "Location",
        "value": "India"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "The client is a silica gel manufacturer serving the packaging solutions market. Its customers are businesses that need moisture protection for their products in storage and transit, so the company depends on a steady flow of business-to-business enquiries, quotations and repeat orders."
      },
      {
        "type": "p",
        "text": "As the business grew, two gaps became clear: sales activity was not tracked in any structured way, and the company's online presence did not reflect the range and quality of what it manufactures. Jupical implemented Odoo Community CRM alongside a custom website, now supporting more than 10 active users."
      },
      {
        "type": "p",
        "text": "To respect commercial confidentiality, the client's identity and other identifiable business information have been protected under a non-disclosure agreement."
      },
      {
        "type": "h3",
        "text": "The Challenges"
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Informal Sales Tracking Customer relationships, enquiries and quotations were tracked without a structured system, relying on individual memory, personal notes and scattered messages. Follow-up was inconsistent, promising enquiries could slip through unnoticed, and management had no clear view of the sales pipeline.",
        "cells": [
          "Informal Sales Tracking Customer relationships, enquiries and quotations were tracked without a structured system, relying on individual memory, personal notes and scattered messages.",
          "Follow-up was inconsistent, promising enquiries could slip through unnoticed, and management had no clear view of the sales pipeline."
        ]
      },
      {
        "type": "tr",
        "text": "Limited Web Presence The business did not have a website that reflected its products, capabilities and credibility as a manufacturer. Prospective buyers had little to evaluate before getting in touch, and inbound enquiries from the web were limited.",
        "cells": [
          "Limited Web Presence The business did not have a website that reflected its products, capabilities and credibility as a manufacturer.",
          "Prospective buyers had little to evaluate before getting in touch, and inbound enquiries from the web were limited."
        ]
      },
      {
        "type": "tr",
        "text": "Enquiries Not Connected to a Sales Process Even when an enquiry arrived, there was no consistent path from first contact through quotation to follow-up and close. Sales effort depended on individuals rather than on a repeatable process the whole team could follow.",
        "cells": [
          "Enquiries Not Connected to a Sales Process Even when an enquiry arrived, there was no consistent path from first contact through quotation to follow-up and close.",
          "Sales effort depended on individuals rather than on a repeatable process the whole team could follow."
        ]
      },
      {
        "type": "tr",
        "text": "No Shared Customer History Details of past conversations and customer requirements were held by whoever handled the account. Handing over a customer, or picking up a conversation after a gap, meant starting again from incomplete information.",
        "cells": [
          "No Shared Customer History Details of past conversations and customer requirements were held by whoever handled the account.",
          "Handing over a customer, or picking up a conversation after a gap, meant starting again from incomplete information."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to give the business a structured way to manage its sales activity, and a website that presents it properly to the market, with the two working together."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Bring structure to customer relationship and sales activity tracking."
      },
      {
        "type": "li",
        "text": "Give the team a consistent pipeline from enquiry to quotation to close"
      },
      {
        "type": "li",
        "text": "Keep a shared, accessible history of each customer and conversation"
      },
      {
        "type": "li",
        "text": "Build a custom website that reflects the business's products and supports its market presence"
      },
      {
        "type": "li",
        "text": "Make it easy for inbound web enquiries to reach the sales team"
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Jupical delivered an Odoo Community CRM and a custom website built to work alongside it."
      },
      {
        "type": "p",
        "text": "The implementation covered:"
      },
      {
        "type": "li",
        "text": "CRM for lead, enquiry and customer management"
      },
      {
        "type": "li",
        "text": "Sales pipeline and quotation tracking"
      },
      {
        "type": "li",
        "text": "Custom website presenting the company and its silica gel products"
      },
      {
        "type": "li",
        "text": "Website-to-CRM enquiry handling"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "h4",
        "text": "1. Understanding How the Business Sells"
      },
      {
        "type": "p",
        "text": "Jupical started by understanding how enquiries reached the business, how quotations were prepared and followed up, and where opportunities were being lost, so the CRM would reflect the real sales process instead of a generic template."
      },
      {
        "type": "h4",
        "text": "2. Designing the CRM and Website Together"
      },
      {
        "type": "p",
        "text": "Rather than treating the CRM and the website as separate projects, Jupical planned them together, so that a visitor's enquiry on the website would arrive directly in the sales team's pipeline."
      },
      {
        "type": "h4",
        "text": "3. CRM Configuration"
      },
      {
        "type": "p",
        "text": "Odoo Community CRM was configured around the client's own pipeline stages, giving the team one place to record enquiries, track quotations and manage follow-up on every opportunity."
      },
      {
        "type": "h4",
        "text": "4. Custom Website Development"
      },
      {
        "type": "p",
        "text": "A custom website was built to present the business's silica gel and packaging products clearly and credibly, giving prospective buyers what they need to evaluate the company before they get in touch."
      },
      {
        "type": "h4",
        "text": "5. Connecting Website Enquiries to the Sales Pipeline"
      },
      {
        "type": "p",
        "text": "Enquiries submitted through the website flow straight into the CRM, so no inbound interest is lost between the website and the sales team."
      },
      {
        "type": "h4",
        "text": "6. Validation Against Real Sales Scenarios"
      },
      {
        "type": "p",
        "text": "The setup was checked against real enquiry and quotation scenarios, confirming that an opportunity could be followed from first contact through follow-up in a single system."
      },
      {
        "type": "h4",
        "text": "7. Training and Adoption"
      },
      {
        "type": "p",
        "text": "The sales team was trained on the CRM so that recording and following up opportunities became part of everyday work, supporting adoption across the more than 10 active users."
      },
      {
        "type": "h4",
        "text": "8. Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "The solution was built as a foundation the client can extend, with room to add further modules as the business and its customer base grow."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution What It Delivers",
        "cells": [
          "Solution",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "CRM Setup Gives the team a structured system for tracking enquiries, customers, quotations and follow-up, replacing informal, memory-based tracking.",
        "cells": [
          "CRM Setup",
          "Gives the team a structured system for tracking enquiries, customers, quotations and follow-up, replacing informal, memory-based tracking."
        ]
      },
      {
        "type": "tr",
        "text": "Custom Website Gives the business a web presence built to reflect its silica gel and packaging products and to support its credibility with buyers.",
        "cells": [
          "Custom Website",
          "Gives the business a web presence built to reflect its silica gel and packaging products and to support its credibility with buyers."
        ]
      },
      {
        "type": "tr",
        "text": "Website-to-CRM Enquiry Flow Routes enquiries from the website directly into the sales pipeline so that inbound interest is captured and followed up.",
        "cells": [
          "Website-to-CRM Enquiry Flow",
          "Routes enquiries from the website directly into the sales pipeline so that inbound interest is captured and followed up."
        ]
      },
      {
        "type": "tr",
        "text": "Shared Customer History Keeps conversations and customer details in one place, so any team member can pick up an account with full context.",
        "cells": [
          "Shared Customer History",
          "Keeps conversations and customer details in one place, so any team member can pick up an account with full context."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Implementation",
        "cells": [
          "Before Implementation",
          "After Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Sales and customer relationships were tracked informally, relying on memory and notes. Sales and customer relationships managed through a structured CRM",
        "cells": [
          "Sales and customer relationships were tracked informally, relying on memory and notes.",
          "Sales and customer relationships managed through a structured CRM"
        ]
      },
      {
        "type": "tr",
        "text": "The business had limited or no dedicated web presence. A custom website supports the business's market presence and credibility.",
        "cells": [
          "The business had limited or no dedicated web presence.",
          "A custom website supports the business's market presence and credibility."
        ]
      },
      {
        "type": "tr",
        "text": "Enquiries had no consistent route into the sales process. Website enquiries flow directly into the CRM for follow-up.",
        "cells": [
          "Enquiries had no consistent route into the sales process.",
          "Website enquiries flow directly into the CRM for follow-up."
        ]
      },
      {
        "type": "tr",
        "text": "Customer history lived with individuals. Customer history is shared and accessible to the whole team.",
        "cells": [
          "Customer history lived with individuals.",
          "Customer history is shared and accessible to the whole team."
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "With a CRM and a custom website in place, the client's more than 10 active users now manage sales through a structured system, backed by a dedicated web presence. Enquiries are captured and followed up consistently, and the business presents itself to prospective buyers with far more credibility than before."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical delivered the CRM and the website together, so the client's sales process and web presence were built to work with each other rather than as two disconnected projects, and sized the solution to what a manufacturer of this scale actually needs."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "With a structured CRM and a professional website in place, the client has a foundation it can build on as its customer base grows, adding further ERP capability when the business is ready for it."
      }
    ]
  },
  {
    "slug": "srp-crane-controls-india",
    "detailTitle": "How SRP Crane Controls Connected Sales, People and Production on One System",
    "seoDescription": "From the front office to the factory floor.",
    "intro": "From the front office to the factory floor.",
    "meta": [
      {
        "label": "Services",
        "value": "Consulting & Implementation"
      },
      {
        "label": "Industry",
        "value": "Material Handling Manufacturing"
      },
      {
        "label": "Location",
        "value": "India (distribution network across Ahmedabad, Pune, Bangalore, Faridabad)"
      },
      {
        "label": "Platform",
        "value": "Odoo Enterprise"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "SRP Crane Controls (India) manufactures crane control equipment wireless remote controls, pendant stations, busbar systems and cable trolleys from its Rajkot headquarters and manufacturing hub, distributing across an extensive network reaching Ahmedabad, Pune, Bangalore and Faridabad."
      },
      {
        "type": "p",
        "text": "With that geographic reach, keeping sales, people and operations aligned across multiple cities isn't a nice-to-have it's what keeps the business running. That was the challenge SRP Crane brought to Jupical: modernize the systems behind the business without slowing the business down."
      },
      {
        "type": "h3",
        "text": "The Challenges"
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "Customer relationships and sales activity across the distribution network relied on individual memory and scattered records rather than a structured system. Sales follow-up depended on individuals, and management had no dependable view of customer history or activity across cities.",
        "cells": [
          "Customer relationships and sales activity across the distribution network relied on individual memory and scattered records rather than a structured system.",
          "Sales follow-up depended on individuals, and management had no dependable view of customer history or activity across cities."
        ]
      },
      {
        "type": "tr",
        "text": "Workforce management and payroll processing ran as manual, separate workflows with no single source of truth as the company scaled across locations. Payroll cycles took more effort than they should, with more room for error and less consistency between locations.",
        "cells": [
          "Workforce management and payroll processing ran as manual, separate workflows with no single source of truth as the company scaled across locations.",
          "Payroll cycles took more effort than they should, with more room for error and less consistency between locations."
        ]
      },
      {
        "type": "tr",
        "text": "No Unified View Across Functions Sales, HR and payroll data lived in parallel, disconnected systems. It was harder to get a clear read on the business as it grew, and each function had to be reconciled with the others by hand.",
        "cells": [
          "No Unified View Across Functions Sales, HR and payroll data lived in parallel, disconnected systems.",
          "It was harder to get a clear read on the business as it grew, and each function had to be reconciled with the others by hand."
        ]
      },
      {
        "type": "tr",
        "text": "Limited Manufacturing Process Visibility Production processes on the factory floor lacked the structured tracking that the front office needed as well. The connection between what was sold, who was working and what was being produced could not be seen in one place.",
        "cells": [
          "Limited Manufacturing Process Visibility Production processes on the factory floor lacked the structured tracking that the front office needed as well.",
          "The connection between what was sold, who was working and what was being produced could not be seen in one place."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was to give a growing, multi-city manufacturer one connected system, starting where disconnected manual processes cost the most and extending outward to the factory floor."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Bring structure to customer relationship and sales activity tracking across the distribution network."
      },
      {
        "type": "li",
        "text": "Establish a single, reliable system for managing the workforce as it scales across cities."
      },
      {
        "type": "li",
        "text": "Replace manual payroll processing with an automated, auditable workflow"
      },
      {
        "type": "li",
        "text": "Give management one consistent view across sales, people and pay"
      },
      {
        "type": "li",
        "text": "Extend the same connected, structured approach from the front office to production visibility on the factory floor."
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Jupical delivered an Odoo Enterprise implementation built outward from the business's daily functions."
      },
      {
        "type": "p",
        "text": "The implementation covered:"
      },
      {
        "type": "li",
        "text": "CRM for customer and sales activity"
      },
      {
        "type": "li",
        "text": "HR for workforce management"
      },
      {
        "type": "li",
        "text": "Payroll with an automated, auditable workflow"
      },
      {
        "type": "li",
        "text": "Manufacturing process visibility, extending the same approach to the factory floor"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "Jupical implemented Odoo Enterprise around a simple principle: start with the functions that touch the business every day, and build outward from there. That meant beginning with sales, people and pay the three areas where disconnected, manual processes tend to cost a growing manufacturer the most in lost time and lost visibility."
      },
      {
        "type": "p",
        "text": "With CRM, HR and Payroll live and adopted across more than 25 active users, Jupical and SRP Crane turned to the part of the business where precision matters most: the factory floor, extending the same connected approach to manufacturing process visibility."
      },
      {
        "type": "p",
        "text": "Throughout the engagement, Jupical drew on its broader experience implementing ERP systems for manufacturers across casting, paints, pumps and machine-building industries that, like crane controls, depend on tight coordination between production, inventory and people."
      },
      {
        "type": "h4",
        "text": "1. Process Discovery and Gap Analysis"
      },
      {
        "type": "p",
        "text": "Jupical started by understanding how sales, people and pay were actually being managed across the client's locations, and where information was being held in memory, in scattered files or in separate manual workflows."
      },
      {
        "type": "h4",
        "text": "2. Starting with the Functions That Touch the Business Every Day"
      },
      {
        "type": "p",
        "text": "Rather than attempting everything at once, the implementation began with sales, people and pay, the three areas where disconnected manual processes tend to cost a growing manufacturer the most in lost time and lost visibility."
      },
      {
        "type": "h4",
        "text": "3. CRM Configuration"
      },
      {
        "type": "p",
        "text": "Odoo Enterprise CRM was configured to give the sales team one structured place to record customers and activity across the distribution network, replacing memory-based and scattered records."
      },
      {
        "type": "h4",
        "text": "4. HR and Payroll Configuration"
      },
      {
        "type": "p",
        "text": "HR was set up as a single, reliable system for the workforce across locations, with payroll running on an automated, auditable workflow in place of manual processing."
      },
      {
        "type": "h4",
        "text": "5. Validation Against Real Scenarios"
      },
      {
        "type": "p",
        "text": "The configuration was tested against how the business really operates, including payroll cycles and multi-location workforce records, before the team relied on it day to day."
      },
      {
        "type": "h4",
        "text": "6. Training and Adoption"
      },
      {
        "type": "p",
        "text": "Role-based training helped the team adopt the new system, and CRM, HR and Payroll went live and were adopted across more than 25 active users."
      },
      {
        "type": "h4",
        "text": "7. Extending to the Factory Floor"
      },
      {
        "type": "p",
        "text": "With the front-office functions established, Jupical turned to the part of the business where precision matters most, extending the same connected approach to manufacturing process visibility. Jupical drew on its broader experience implementing ERP for manufacturers across casting, paints, pumps and machine-building, industries that also depend on tight coordination between production, inventory and people."
      },
      {
        "type": "h4",
        "text": "8. Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "The implementation was built as a foundation the client can keep extending, so that further capability can be added as the business continues to grow."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Solution Purpose",
        "cells": [
          "Solution",
          "Purpose"
        ]
      },
      {
        "type": "tr",
        "text": "CRM Setup Structured tracking of customer relationships and sales activity across SRP Crane's multi-city distribution network, replacing memory-based and scattered records.",
        "cells": [
          "CRM Setup",
          "Structured tracking of customer relationships and sales activity across SRP Crane's multi-city distribution network, replacing memory-based and scattered records."
        ]
      },
      {
        "type": "tr",
        "text": "HR Configuration A single, reliable system for managing the workforce as SRP Crane scales across Rajkot, Ahmedabad, Pune, Bangalore and Faridabad.",
        "cells": [
          "HR Configuration",
          "A single, reliable system for managing the workforce as SRP Crane scales across Rajkot, Ahmedabad, Pune, Bangalore and Faridabad."
        ]
      },
      {
        "type": "tr",
        "text": "Payroll Automation Replaced manual payroll processing with an automated, auditable workflow.",
        "cells": [
          "Payroll Automation",
          "Replaced manual payroll processing with an automated, auditable workflow."
        ]
      },
      {
        "type": "tr",
        "text": "Manufacturing Process Visibility Extended the same connected, structured approach from the front office to production tracking on the factory floor, drawing on Jupical's cross-industry manufacturing implementation experience.",
        "cells": [
          "Manufacturing Process Visibility",
          "Extended the same connected, structured approach from the front office to production tracking on the factory floor, drawing on Jupical's cross-industry manufacturing implementation experience."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Sales activity and customer history tracked informally, relying on memory and scattered records Sales activity and customer history managed in a single, structured CRM",
        "cells": [
          "Sales activity and customer history tracked informally, relying on memory and scattered records",
          "Sales activity and customer history managed in a single, structured CRM"
        ]
      },
      {
        "type": "tr",
        "text": "HR and payroll ran as separate, manual workflows Workforce data and payroll processing live in one connected system",
        "cells": [
          "HR and payroll ran as separate, manual workflows",
          "Workforce data and payroll processing live in one connected system"
        ]
      },
      {
        "type": "tr",
        "text": "No single source of truth across sales, HR and payroll Shared, structured system connecting all three functions",
        "cells": [
          "No single source of truth across sales, HR and payroll",
          "Shared, structured system connecting all three functions"
        ]
      },
      {
        "type": "tr",
        "text": "Manufacturing processes tracked separately from the rest of the business Production process visibility extended from the same connected foundation",
        "cells": [
          "Manufacturing processes tracked separately from the rest of the business",
          "Production process visibility extended from the same connected foundation"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "The client now runs on a connected ERP foundation spanning sales, people, payroll and manufacturing, a shift from disconnected processes to a single operating system for the business. It can see itself clearly across every function: from a sales lead in one city, to a payroll run at headquarters, to a production process on the shop floor."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical drew on its cross-industry manufacturing implementation experience, across casting, paints, pumps and machine-building, to bring the same discipline in production, inventory and people coordination to a crane controls manufacturer."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "As SRP Crane continues expanding its reach in the material handling industry, its connected ERP foundation gives it the visibility and scalability to grow without outgrowing its own systems."
      }
    ]
  },
  {
    "slug": "al-emara-construction-commercial-construction",
    "detailTitle": "From the First Brick to the Final Invoice",
    "seoDescription": "Every step, one system.",
    "intro": "Every step, one system.",
    "meta": [
      {
        "label": "Location",
        "value": "Qatar"
      },
      {
        "label": "Industry",
        "value": "Commercial Construction"
      },
      {
        "label": "Services",
        "value": "Customization, Consulting & Implementation"
      },
      {
        "label": "Platform",
        "value": "Odoo 18 Community"
      }
    ],
    "contentBlocks": [
      {
        "type": "h3",
        "text": "About the Client"
      },
      {
        "type": "p",
        "text": "Al Emara Construction is a commercial construction company in Qatar managing multiple simultaneous projects, each involving properties, units, contractors, architects, materials, labour, and phased billing to buyers. With growing project complexity and an expanding portfolio, the tools they had relied on could no longer keep up."
      },
      {
        "type": "p",
        "text": "The client had explored other software solutions before approaching Jupical. None of them lasted: they were too rigid and too disconnected from how construction projects actually work. The ask was simple: build a system that understands construction. On Odoo Community, that is exactly what was delivered."
      },
      {
        "type": "p",
        "text": "To respect commercial confidentiality, the client's identity and other identifiable business information have been protected under a non-disclosure agreement."
      },
      {
        "type": "h3",
        "text": "The Challenges"
      },
      {
        "type": "tr",
        "text": "Challenge Business Impact",
        "cells": [
          "Challenge",
          "Business Impact"
        ]
      },
      {
        "type": "tr",
        "text": "No Structured Progressive Billing Billing buyers in phases based on construction progress had no formal system. Scope-wise invoices, percentages and remaining balances were tracked manually. Errors, delays and disputes with buyers over what had been billed and what remained.",
        "cells": [
          "No Structured Progressive Billing Billing buyers in phases based on construction progress had no formal system. Scope-wise invoices, percentages and remaining balances were tracked manually.",
          "Errors, delays and disputes with buyers over what had been billed and what remained."
        ]
      },
      {
        "type": "tr",
        "text": "Advance Payments Had No Traceability Buyers paid advances before work began, and these had to be adjusted against future invoices, but the link between payment and invoice was tracked on spreadsheets. Reconciliation errors between payments received and invoices raised.",
        "cells": [
          "Advance Payments Had No Traceability Buyers paid advances before work began, and these had to be adjusted against future invoices, but the link between payment and invoice was tracked on spreadsheets.",
          "Reconciliation errors between payments received and invoices raised."
        ]
      },
      {
        "type": "tr",
        "text": "Retention Amounts Manually Managed A percentage of each invoice was held as retention until project completion, with no system to track retention per scope. Finance teams constantly miscalculated what was withheld and what was payable.",
        "cells": [
          "Retention Amounts Manually Managed A percentage of each invoice was held as retention until project completion, with no system to track retention per scope.",
          "Finance teams constantly miscalculated what was withheld and what was payable."
        ]
      },
      {
        "type": "tr",
        "text": "Invoice Omissions Had No Audit Trail When scope changes reduced the billable amount, omissions were recorded on paper or in email threads. No link to the original invoice, no audit trail, and no automatic update to the project total.",
        "cells": [
          "Invoice Omissions Had No Audit Trail When scope changes reduced the billable amount, omissions were recorded on paper or in email threads.",
          "No link to the original invoice, no audit trail, and no automatic update to the project total."
        ]
      },
      {
        "type": "tr",
        "text": "Asset Depreciation Not Linked to Projects Machinery and equipment used across multiple projects had no way to allocate depreciation cost project by project. Financial reporting included asset costs but not which project they belonged to.",
        "cells": [
          "Asset Depreciation Not Linked to Projects Machinery and equipment used across multiple projects had no way to allocate depreciation cost project by project.",
          "Financial reporting included asset costs but not which project they belonged to."
        ]
      },
      {
        "type": "tr",
        "text": "Labour Wages Calculated Manually Daily labourers were paid based on attendance, but nothing connected attendance records to wage calculation. Every payroll period required manual counting and calculation.",
        "cells": [
          "Labour Wages Calculated Manually Daily labourers were paid based on attendance, but nothing connected attendance records to wage calculation.",
          "Every payroll period required manual counting and calculation."
        ]
      },
      {
        "type": "tr",
        "text": "Purchases Not Linked to Projects Material purchases had no project-level linkage. No way to see what was ordered for which site, what had arrived, what was pending, or the project's total material cost.",
        "cells": [
          "Purchases Not Linked to Projects Material purchases had no project-level linkage.",
          "No way to see what was ordered for which site, what had arrived, what was pending, or the project's total material cost."
        ]
      },
      {
        "type": "tr",
        "text": "No Project-Wise Financial View Revenue, costs and profitability per project were assembled manually from multiple sources at month end. Management had no live view of how each project was performing financially.",
        "cells": [
          "No Project-Wise Financial View Revenue, costs and profitability per project were assembled manually from multiple sources at month end.",
          "Management had no live view of how each project was performing financially."
        ]
      },
      {
        "type": "h3",
        "text": "Project Objectives"
      },
      {
        "type": "p",
        "text": "The primary objective was a system that speaks construction natively, one that follows a project from the first property record to the final invoice without leaving the ERP."
      },
      {
        "type": "p",
        "text": "The implementation aimed to:"
      },
      {
        "type": "li",
        "text": "Bring formal, scope-wise progressive billing to every project."
      },
      {
        "type": "li",
        "text": "Track advance payments and auto-adjust them against future invoices."
      },
      {
        "type": "li",
        "text": "Manage retention per invoice, with full aging visibility."
      },
      {
        "type": "li",
        "text": "Give every invoice omission a clear, auditable trail back to the original invoice."
      },
      {
        "type": "li",
        "text": "Allocate asset depreciation to the specific projects that use the equipment."
      },
      {
        "type": "li",
        "text": "Automate labour wage calculation from attendance records."
      },
      {
        "type": "li",
        "text": "Link every material purchase to its project."
      },
      {
        "type": "li",
        "text": "Give management a live, project-wise financial view without manual consolidation."
      },
      {
        "type": "h3",
        "text": "Solution Scope"
      },
      {
        "type": "p",
        "text": "Project & Property Management → Project Scope with Progressive Invoicing → Advance Payment & Retention → Invoice Omission Tracking → Asset Management with Project-Wise Depreciation → Labour Management & Attendance-Based Wages → Purchase Orders, GRNs & Backorders → Budget & Analytic Accounting → Project-Wise Financial Reporting"
      },
      {
        "type": "h3",
        "text": "Jupical's Approach"
      },
      {
        "type": "p",
        "text": "When this construction company engaged Jupical Technologies, the goal was not to configure a standard Odoo setup. Construction has its own language project scopes, progressive billing, advance adjustments, retention releases, depreciation by site and the ERP had to speak it natively."
      },
      {
        "type": "p",
        "text": "Jupical mapped the full project lifecycle first: from property creation and analytic budgeting, through scope-wise progressive invoicing and payment management, all the way to labour expense tracking and project-wise financial close. Every module built reflects a real step in how this construction company operates."
      },
      {
        "type": "h4",
        "text": "1. Learning the Language of Construction Finance"
      },
      {
        "type": "p",
        "text": "Construction has its own vocabulary: project scopes, progressive billing, advance adjustments, retention releases and depreciation by site. Jupical began by learning how projects are actually financed and managed on the ground, because the ERP had to speak that language natively rather than approximate it."
      },
      {
        "type": "h4",
        "text": "2. Mapping the Full Project Lifecycle"
      },
      {
        "type": "p",
        "text": "Jupical mapped the lifecycle end to end, from property creation and analytic budgeting, through scope-wise progressive invoicing and payment management, to labour expense tracking and project-wise financial close, so that every module built would reflect a real step in how the client operates."
      },
      {
        "type": "h4",
        "text": "3. Property, Project and Budget Foundation"
      },
      {
        "type": "p",
        "text": "Projects were linked to specific properties and units, each with its own price, floor, size, architect, contractor and analytic account. Budgets and analytic accounts were set up so that every cost and every invoice could later be tied back to the right project."
      },
      {
        "type": "h4",
        "text": "4. Progressive Billing, Advances, Retention and Omissions"
      },
      {
        "type": "p",
        "text": "The billing engine was built around named project scopes, each billed at a defined percentage of the project value. Advance payments adjust automatically against later invoices, retention is withheld and aged per invoice, and omissions are recorded directly on the invoice, giving every adjustment a clear audit trail."
      },
      {
        "type": "h4",
        "text": "5. Assets and Depreciation by Project"
      },
      {
        "type": "p",
        "text": "Machinery and equipment were registered as assets with defined depreciation schedules, and an allocation layer distributes depreciation across the projects that actually used them, so each project carries only its own share."
      },
      {
        "type": "h4",
        "text": "6. Labour, Purchasing and Project-Wise Reporting"
      },
      {
        "type": "p",
        "text": "Labour wages were connected to attendance records, material purchases were linked to their projects, and a project-wise financial report brought invoices, bills and expenses together in one view."
      },
      {
        "type": "h4",
        "text": "7. Validation and Adoption on the Team's Own Workflow"
      },
      {
        "type": "p",
        "text": "The system was built on the client's own workflow, with the same scopes, billing phases and retention logic the team already worked with, so it felt familiar from day one. That familiarity drove quick adoption and let the team trust the numbers."
      },
      {
        "type": "h4",
        "text": "8. Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "The platform was designed as a financial foundation the client can scale on, with every project tracked, every invoice reconciled and every cost allocated to the site it belongs to."
      },
      {
        "type": "h3",
        "text": "Custom Solutions Developed"
      },
      {
        "type": "tr",
        "text": "Feature What It Delivers",
        "cells": [
          "Feature",
          "What It Delivers"
        ]
      },
      {
        "type": "tr",
        "text": "Project & Property Management Projects are linked to specific properties and units, each with their own price, floor, square footage, architect, contractor, and analytic account. Selling a property automatically generates a Sale Order with all project and scope details pre-filled, and status updates from Available to Sold are tracked and logged.",
        "cells": [
          "Project & Property Management",
          "Projects are linked to specific properties and units, each with their own price, floor, square footage, architect, contractor, and analytic account. Selling a property automatically generates a Sale Order with all project and scope details pre-filled, and status updates from Available to Sold are tracked and logged."
        ]
      },
      {
        "type": "tr",
        "text": "Project Scope with Progressive Invoicing Each project is divided into named scopes (Prelim, Secondary, Third Phase, or custom phases). For each scope, an invoice is raised at a defined percentage of the total project value. The system tracks Total Progress Billing, Previously Invoiced, Remaining Balance, and Currently Invoiced on every invoice, eliminating billing disputes and manual calculations.",
        "cells": [
          "Project Scope with Progressive Invoicing",
          "Each project is divided into named scopes (Prelim, Secondary, Third Phase, or custom phases). For each scope, an invoice is raised at a defined percentage of the total project value. The system tracks Total Progress Billing, Previously Invoiced, Remaining Balance, and Currently Invoiced on every invoice, eliminating billing disputes and manual calculations."
        ]
      },
      {
        "type": "tr",
        "text": "Advance Payment Tracking & Auto-Adjustment Advance payments received from buyers are registered against the specific project. When the next progressive invoice is created, the advance is visible and adjustable in the Current Advance Payment field, automatically reducing the Amount Due. Every adjustment is traceable with a full payment history.",
        "cells": [
          "Advance Payment Tracking & Auto-Adjustment",
          "Advance payments received from buyers are registered against the specific project. When the next progressive invoice is created, the advance is visible and adjustable in the Current Advance Payment field, automatically reducing the Amount Due. Every adjustment is traceable with a full payment history."
        ]
      },
      {
        "type": "tr",
        "text": "Retention Management per Invoice A retention amount can be defined on each invoice; the system withholds it from the payable total, so only the non-retained amount is collected on payment. An Aged Payable Retention Report tracks all outstanding retentions by vendor across aging periods (1-30, 31-60, 61-90, 91-120 days, and older).",
        "cells": [
          "Retention Management per Invoice",
          "A retention amount can be defined on each invoice; the system withholds it from the payable total, so only the non-retained amount is collected on payment. An Aged Payable Retention Report tracks all outstanding retentions by vendor across aging periods (1-30, 31-60, 61-90, 91-120 days, and older)."
        ]
      },
      {
        "type": "tr",
        "text": "Invoice Omission Tracking When a scope change reduces the billable amount, the omission is recorded directly on the invoice via an Invoice Omission tab. The Total Progress Billing is automatically reduced, the Omission Amount is displayed separately, and a full omission history per project is visible a clear audit trail for every scope adjustment.",
        "cells": [
          "Invoice Omission Tracking",
          "When a scope change reduces the billable amount, the omission is recorded directly on the invoice via an Invoice Omission tab. The Total Progress Billing is automatically reduced, the Omission Amount is displayed separately, and a full omission history per project is visible a clear audit trail for every scope adjustment."
        ]
      },
      {
        "type": "tr",
        "text": "Asset Management with Project-Wise Depreciation Every piece of equipment tractors, machinery, tools is registered as an asset with gross value, salvage value, and a defined depreciation schedule. An Asset Allocation tab distributes depreciation cost across multiple projects based on usage dates and percentage, so each project carries only the depreciation it actually incurred.",
        "cells": [
          "Asset Management with Project-Wise Depreciation",
          "Every piece of equipment tractors, machinery, tools is registered as an asset with gross value, salvage value, and a defined depreciation schedule. An Asset Allocation tab distributes depreciation cost across multiple projects based on usage dates and percentage, so each project carries only the depreciation it actually incurred."
        ]
      },
      {
        "type": "tr",
        "text": "Labour Management & Attendance-Based Wages Labourers are registered with daily wage rates. Attendance is recorded with check-in and check-out times, linked to the relevant project's analytic account. Labour Expenses are generated by selecting the labourer and date range the system automatically calculates total hours worked, wage rate, and total payable amount.",
        "cells": [
          "Labour Management & Attendance-Based Wages",
          "Labourers are registered with daily wage rates. Attendance is recorded with check-in and check-out times, linked to the relevant project's analytic account. Labour Expenses are generated by selecting the labourer and date range the system automatically calculates total hours worked, wage rate, and total payable amount."
        ]
      },
      {
        "type": "tr",
        "text": "Purchase Orders, GRNs & Backorders Material purchases are linked at the project level, so the team can see what was ordered for which site, what has arrived, what's pending, and the project's total material cost.",
        "cells": [
          "Purchase Orders, GRNs & Backorders",
          "Material purchases are linked at the project level, so the team can see what was ordered for which site, what has arrived, what's pending, and the project's total material cost."
        ]
      },
      {
        "type": "tr",
        "text": "Budget & Analytic Accounting Budgetary positions group all accounts affecting a project's financial performance (materials, labour, bank, receivables). Analytic accounts link projects to budgets with planned amounts, start and end dates, and real-time variance tracking between planned and actual spend.",
        "cells": [
          "Budget & Analytic Accounting",
          "Budgetary positions group all accounts affecting a project's financial performance (materials, labour, bank, receivables). Analytic accounts link projects to budgets with planned amounts, start and end dates, and real-time variance tracking between planned and actual spend."
        ]
      },
      {
        "type": "tr",
        "text": "Project-Wise Financial Reporting A custom Project-wise Report in the Accounting module shows all invoices, bills, and expenses per project with debit, credit, and balance columns, exportable to PDF or Excel. Management can filter by project, vendor, payment status, and date range for instant project profitability visibility without manual consolidation.",
        "cells": [
          "Project-Wise Financial Reporting",
          "A custom Project-wise Report in the Accounting module shows all invoices, bills, and expenses per project with debit, credit, and balance columns, exportable to PDF or Excel. Management can filter by project, vendor, payment status, and date range for instant project profitability visibility without manual consolidation."
        ]
      },
      {
        "type": "h3",
        "text": "Before and After"
      },
      {
        "type": "tr",
        "text": "Before Implementation After Jupical Implementation",
        "cells": [
          "Before Implementation",
          "After Jupical Implementation"
        ]
      },
      {
        "type": "tr",
        "text": "Progressive billing tracked manually across scopes, causing errors and disputes Progressive billing tracked automatically per scope, per project",
        "cells": [
          "Progressive billing tracked manually across scopes, causing errors and disputes",
          "Progressive billing tracked automatically per scope, per project"
        ]
      },
      {
        "type": "tr",
        "text": "Advance payments reconciled against invoices on spreadsheets Advance payments auto-adjusted against future invoices with full payment history",
        "cells": [
          "Advance payments reconciled against invoices on spreadsheets",
          "Advance payments auto-adjusted against future invoices with full payment history"
        ]
      },
      {
        "type": "tr",
        "text": "Retention amounts manually calculated and frequently miscalculated Retention withheld automatically per invoice, with an aged retention report",
        "cells": [
          "Retention amounts manually calculated and frequently miscalculated",
          "Retention withheld automatically per invoice, with an aged retention report"
        ]
      },
      {
        "type": "tr",
        "text": "Invoice omissions recorded on paper or in email threads with no audit trail Invoice omissions tracked directly on the invoice with a full history",
        "cells": [
          "Invoice omissions recorded on paper or in email threads with no audit trail",
          "Invoice omissions tracked directly on the invoice with a full history"
        ]
      },
      {
        "type": "tr",
        "text": "Asset depreciation not linked to the projects that used the equipment Depreciation allocated project-wise based on actual usage",
        "cells": [
          "Asset depreciation not linked to the projects that used the equipment",
          "Depreciation allocated project-wise based on actual usage"
        ]
      },
      {
        "type": "tr",
        "text": "Labour wages calculated manually from attendance sheets each payroll period Labour wages calculated automatically from linked attendance records",
        "cells": [
          "Labour wages calculated manually from attendance sheets each payroll period",
          "Labour wages calculated automatically from linked attendance records"
        ]
      },
      {
        "type": "tr",
        "text": "Material purchases had no project-level linkage Purchases, GRNs and backorders linked directly to each project",
        "cells": [
          "Material purchases had no project-level linkage",
          "Purchases, GRNs and backorders linked directly to each project"
        ]
      },
      {
        "type": "tr",
        "text": "Project profitability assembled manually from multiple sources at month end Live, project-wise financial reporting available directly from the system",
        "cells": [
          "Project profitability assembled manually from multiple sources at month end",
          "Live, project-wise financial reporting available directly from the system"
        ]
      },
      {
        "type": "h3",
        "text": "Results and Business Impact"
      },
      {
        "type": "p",
        "text": "The transformation was financial, operational and cultural. A company that once managed progressive billing on spreadsheets, tracked advance payments in email threads and calculated labour wages by hand now operates every aspect of construction finance from a single, integrated system, with progressive billing tracked per scope and per project, and asset depreciation no longer left unlinked across projects."
      },
      {
        "type": "h3",
        "text": "Why Jupical"
      },
      {
        "type": "p",
        "text": "Jupical Technologies did not configure a standard Odoo setup and call it a construction solution. Every feature built for this project from scope-wise progressive invoicing and advance payment reconciliation to project-linked asset depreciation and attendance-based labour expenses was designed by first understanding how construction projects are actually financed and managed on the ground."
      },
      {
        "type": "p",
        "text": "The platform felt familiar from day one because it was built on the team's own workflow: the same scopes, the same billing phases, the same retention logic they had always worked with, now running digitally and error-free."
      },
      {
        "type": "h3",
        "text": "A Scalable Foundation for Growth"
      },
      {
        "type": "p",
        "text": "More than delivering an ERP, Jupical helped this construction company build a financial foundation it can scale on, with every project tracked, every invoice reconciled and every cost allocated to the site it belongs to."
      }
    ]
  }
].map((study) => [study.slug, study]));
