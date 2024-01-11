export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Address: {
        Row: {
          city: string
          country: string
          createdAt: string
          customerId: string | null
          deletedAt: string | null
          franchiseId: string | null
          franchisorId: string | null
          id: string
          isDeleted: boolean
          isInvoice: boolean
          name: string
          postalCode: string
          street1: string
          street2: string | null
          updatedAt: string
          vatNumber: string | null
        }
        Insert: {
          city: string
          country: string
          createdAt?: string
          customerId?: string | null
          deletedAt?: string | null
          franchiseId?: string | null
          franchisorId?: string | null
          id: string
          isDeleted?: boolean
          isInvoice: boolean
          name: string
          postalCode: string
          street1: string
          street2?: string | null
          updatedAt: string
          vatNumber?: string | null
        }
        Update: {
          city?: string
          country?: string
          createdAt?: string
          customerId?: string | null
          deletedAt?: string | null
          franchiseId?: string | null
          franchisorId?: string | null
          id?: string
          isDeleted?: boolean
          isInvoice?: boolean
          name?: string
          postalCode?: string
          street1?: string
          street2?: string | null
          updatedAt?: string
          vatNumber?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Address_customerId_fkey"
            columns: ["customerId"]
            isOneToOne: false
            referencedRelation: "Customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Address_franchiseId_fkey"
            columns: ["franchiseId"]
            isOneToOne: false
            referencedRelation: "Franchise"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Address_franchisorId_fkey"
            columns: ["franchisorId"]
            isOneToOne: false
            referencedRelation: "Franchisor"
            referencedColumns: ["id"]
          }
        ]
      }
      AuditLog: {
        Row: {
          action: Database["public"]["Enums"]["AuditAction"]
          createdAt: string
          id: string
          newValue: Json | null
          oldValue: Json | null
          recordId: string
          tableName: Database["public"]["Enums"]["AuditTable"]
          userId: string
        }
        Insert: {
          action: Database["public"]["Enums"]["AuditAction"]
          createdAt?: string
          id: string
          newValue?: Json | null
          oldValue?: Json | null
          recordId: string
          tableName: Database["public"]["Enums"]["AuditTable"]
          userId: string
        }
        Update: {
          action?: Database["public"]["Enums"]["AuditAction"]
          createdAt?: string
          id?: string
          newValue?: Json | null
          oldValue?: Json | null
          recordId?: string
          tableName?: Database["public"]["Enums"]["AuditTable"]
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "AuditLog_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      Cart: {
        Row: {
          createdAt: string
          customerId: string
          deletedAt: string | null
          id: string
          isDeleted: boolean
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          customerId: string
          deletedAt?: string | null
          id: string
          isDeleted?: boolean
          updatedAt: string
        }
        Update: {
          createdAt?: string
          customerId?: string
          deletedAt?: string | null
          id?: string
          isDeleted?: boolean
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Cart_customerId_fkey"
            columns: ["customerId"]
            isOneToOne: false
            referencedRelation: "Customer"
            referencedColumns: ["id"]
          }
        ]
      }
      CartItem: {
        Row: {
          cartId: string
          createdAt: string
          deletedAt: string | null
          id: string
          isDeleted: boolean
          productId: string
          quantity: number
          updatedAt: string
          variantId: string | null
        }
        Insert: {
          cartId: string
          createdAt?: string
          deletedAt?: string | null
          id: string
          isDeleted?: boolean
          productId: string
          quantity: number
          updatedAt: string
          variantId?: string | null
        }
        Update: {
          cartId?: string
          createdAt?: string
          deletedAt?: string | null
          id?: string
          isDeleted?: boolean
          productId?: string
          quantity?: number
          updatedAt?: string
          variantId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "CartItem_cartId_fkey"
            columns: ["cartId"]
            isOneToOne: false
            referencedRelation: "Cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CartItem_productId_fkey"
            columns: ["productId"]
            isOneToOne: false
            referencedRelation: "Product"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CartItem_variantId_fkey"
            columns: ["variantId"]
            isOneToOne: false
            referencedRelation: "Variant"
            referencedColumns: ["id"]
          }
        ]
      }
      CartItemVariants: {
        Row: {
          cartItemId: string
          createdAt: string
          deletedAt: string | null
          id: string
          isDeleted: boolean
          name: string
          price: number
          quantity: number
          tax: number
          totalPrice: number
          updatedAt: string
          variantId: string
        }
        Insert: {
          cartItemId: string
          createdAt?: string
          deletedAt?: string | null
          id: string
          isDeleted?: boolean
          name: string
          price: number
          quantity: number
          tax: number
          totalPrice: number
          updatedAt: string
          variantId: string
        }
        Update: {
          cartItemId?: string
          createdAt?: string
          deletedAt?: string | null
          id?: string
          isDeleted?: boolean
          name?: string
          price?: number
          quantity?: number
          tax?: number
          totalPrice?: number
          updatedAt?: string
          variantId?: string
        }
        Relationships: [
          {
            foreignKeyName: "CartItemVariants_cartItemId_fkey"
            columns: ["cartItemId"]
            isOneToOne: false
            referencedRelation: "CartItem"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "CartItemVariants_variantId_fkey"
            columns: ["variantId"]
            isOneToOne: false
            referencedRelation: "Variant"
            referencedColumns: ["id"]
          }
        ]
      }
      Customer: {
        Row: {
          createdAt: string
          deletedAt: string | null
          email: string
          firstName: string
          id: string
          isDeleted: boolean
          lastName: string
          password: string
          phone: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          email: string
          firstName: string
          id: string
          isDeleted?: boolean
          lastName: string
          password: string
          phone: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          email?: string
          firstName?: string
          id?: string
          isDeleted?: boolean
          lastName?: string
          password?: string
          phone?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Franchise: {
        Row: {
          createdAt: string
          deletedAt: string | null
          franchisorId: string
          id: string
          isDeleted: boolean
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          franchisorId: string
          id: string
          isDeleted?: boolean
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          franchisorId?: string
          id?: string
          isDeleted?: boolean
          name?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Franchise_franchisorId_fkey"
            columns: ["franchisorId"]
            isOneToOne: false
            referencedRelation: "Franchisor"
            referencedColumns: ["id"]
          }
        ]
      }
      Franchisor: {
        Row: {
          createdAt: string
          deletedAt: string | null
          id: string
          isDeleted: boolean
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          id: string
          isDeleted?: boolean
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          isDeleted?: boolean
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      FranchisorContact: {
        Row: {
          createdAt: string
          deletedAt: string | null
          email: string
          firstName: string
          franchisorId: string
          id: string
          isDeleted: boolean
          lastName: string
          phone: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          email: string
          firstName: string
          franchisorId: string
          id: string
          isDeleted?: boolean
          lastName: string
          phone: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          email?: string
          firstName?: string
          franchisorId?: string
          id?: string
          isDeleted?: boolean
          lastName?: string
          phone?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "FranchisorContact_franchisorId_fkey"
            columns: ["franchisorId"]
            isOneToOne: false
            referencedRelation: "Franchisor"
            referencedColumns: ["id"]
          }
        ]
      }
      Option: {
        Row: {
          createdAt: string
          deletedAt: string | null
          id: string
          isDeleted: boolean
          isMultiple: boolean
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          id: string
          isDeleted?: boolean
          isMultiple: boolean
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          isDeleted?: boolean
          isMultiple?: boolean
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Order: {
        Row: {
          addressId: string
          comment: string | null
          createdAt: string
          customerId: string
          deletedAt: string | null
          deliveryManId: string | null
          id: string
          isDeleted: boolean
          mode: Database["public"]["Enums"]["OrderMode"]
          orderDateTime: string
          pickupDateTime: string | null
          status: Database["public"]["Enums"]["OrderStatus"]
          updatedAt: string
        }
        Insert: {
          addressId: string
          comment?: string | null
          createdAt?: string
          customerId: string
          deletedAt?: string | null
          deliveryManId?: string | null
          id: string
          isDeleted?: boolean
          mode?: Database["public"]["Enums"]["OrderMode"]
          orderDateTime: string
          pickupDateTime?: string | null
          status?: Database["public"]["Enums"]["OrderStatus"]
          updatedAt: string
        }
        Update: {
          addressId?: string
          comment?: string | null
          createdAt?: string
          customerId?: string
          deletedAt?: string | null
          deliveryManId?: string | null
          id?: string
          isDeleted?: boolean
          mode?: Database["public"]["Enums"]["OrderMode"]
          orderDateTime?: string
          pickupDateTime?: string | null
          status?: Database["public"]["Enums"]["OrderStatus"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Order_addressId_fkey"
            columns: ["addressId"]
            isOneToOne: false
            referencedRelation: "Address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Order_customerId_fkey"
            columns: ["customerId"]
            isOneToOne: false
            referencedRelation: "Customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Order_deliveryManId_fkey"
            columns: ["deliveryManId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          }
        ]
      }
      OrderItem: {
        Row: {
          createdAt: string
          deletedAt: string | null
          id: string
          isDeleted: boolean
          name: string
          orderId: string
          price: number
          productId: string
          quantity: number
          tax: number
          totalPrice: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          id: string
          isDeleted?: boolean
          name: string
          orderId: string
          price: number
          productId: string
          quantity: number
          tax: number
          totalPrice: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          isDeleted?: boolean
          name?: string
          orderId?: string
          price?: number
          productId?: string
          quantity?: number
          tax?: number
          totalPrice?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "OrderItem_orderId_fkey"
            columns: ["orderId"]
            isOneToOne: false
            referencedRelation: "Order"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "OrderItem_productId_fkey"
            columns: ["productId"]
            isOneToOne: false
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
      }
      OrderItemVariant: {
        Row: {
          createdAt: string
          deletedAt: string | null
          id: string
          isDeleted: boolean
          name: string
          orderItemId: string
          price: number
          quantity: number
          tax: number
          totalPrice: number
          updatedAt: string
          variantId: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          id: string
          isDeleted?: boolean
          name: string
          orderItemId: string
          price: number
          quantity: number
          tax: number
          totalPrice: number
          updatedAt: string
          variantId: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          isDeleted?: boolean
          name?: string
          orderItemId?: string
          price?: number
          quantity?: number
          tax?: number
          totalPrice?: number
          updatedAt?: string
          variantId?: string
        }
        Relationships: [
          {
            foreignKeyName: "OrderItemVariant_orderItemId_fkey"
            columns: ["orderItemId"]
            isOneToOne: false
            referencedRelation: "OrderItem"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "OrderItemVariant_variantId_fkey"
            columns: ["variantId"]
            isOneToOne: false
            referencedRelation: "Variant"
            referencedColumns: ["id"]
          }
        ]
      }
      Product: {
        Row: {
          createdAt: string
          deletedAt: string | null
          description: string | null
          id: string
          imageUrl: string | null
          isDeleted: boolean
          isPack: boolean
          isPopular: boolean
          name: string
          packProductIds: string | null
          productCategoryId: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          description?: string | null
          id: string
          imageUrl?: string | null
          isDeleted?: boolean
          isPack?: boolean
          isPopular?: boolean
          name: string
          packProductIds?: string | null
          productCategoryId: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          description?: string | null
          id?: string
          imageUrl?: string | null
          isDeleted?: boolean
          isPack?: boolean
          isPopular?: boolean
          name?: string
          packProductIds?: string | null
          productCategoryId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Product_productCategoryId_fkey"
            columns: ["productCategoryId"]
            isOneToOne: false
            referencedRelation: "ProductCategory"
            referencedColumns: ["id"]
          }
        ]
      }
      ProductCategory: {
        Row: {
          createdAt: string
          deletedAt: string | null
          id: string
          imageUrl: string | null
          isDeleted: boolean
          name: string
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          id: string
          imageUrl?: string | null
          isDeleted?: boolean
          name: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          imageUrl?: string | null
          isDeleted?: boolean
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      ProductPricing: {
        Row: {
          createdAt: string
          deletedAt: string | null
          deliveryPrice: number | null
          deliveryTax: number | null
          franchiseId: string
          id: string
          isDeleted: boolean
          onSitePrice: number | null
          onSiteTax: number | null
          productId: string
          takeAwayPrice: number | null
          takeAwayTax: number | null
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          deliveryPrice?: number | null
          deliveryTax?: number | null
          franchiseId: string
          id: string
          isDeleted?: boolean
          onSitePrice?: number | null
          onSiteTax?: number | null
          productId: string
          takeAwayPrice?: number | null
          takeAwayTax?: number | null
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          deliveryPrice?: number | null
          deliveryTax?: number | null
          franchiseId?: string
          id?: string
          isDeleted?: boolean
          onSitePrice?: number | null
          onSiteTax?: number | null
          productId?: string
          takeAwayPrice?: number | null
          takeAwayTax?: number | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "ProductPricing_franchiseId_fkey"
            columns: ["franchiseId"]
            isOneToOne: false
            referencedRelation: "Franchise"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ProductPricing_productId_fkey"
            columns: ["productId"]
            isOneToOne: false
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
      }
      Promotion: {
        Row: {
          amount: number | null
          conditions: Json | null
          createdAt: string
          deletedAt: string | null
          description: string | null
          endDate: string | null
          id: string
          isDeleted: boolean
          name: string
          promotionType: Database["public"]["Enums"]["PromotionType"]
          rate: number | null
          startDate: string | null
          updatedAt: string
        }
        Insert: {
          amount?: number | null
          conditions?: Json | null
          createdAt?: string
          deletedAt?: string | null
          description?: string | null
          endDate?: string | null
          id: string
          isDeleted?: boolean
          name: string
          promotionType: Database["public"]["Enums"]["PromotionType"]
          rate?: number | null
          startDate?: string | null
          updatedAt: string
        }
        Update: {
          amount?: number | null
          conditions?: Json | null
          createdAt?: string
          deletedAt?: string | null
          description?: string | null
          endDate?: string | null
          id?: string
          isDeleted?: boolean
          name?: string
          promotionType?: Database["public"]["Enums"]["PromotionType"]
          rate?: number | null
          startDate?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      Return: {
        Row: {
          createdAt: string
          customerId: string
          deletedAt: string | null
          id: string
          isDeleted: boolean
          orderId: string
          reason: string
          status: Database["public"]["Enums"]["ReturnStatus"]
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          customerId: string
          deletedAt?: string | null
          id: string
          isDeleted?: boolean
          orderId: string
          reason: string
          status?: Database["public"]["Enums"]["ReturnStatus"]
          updatedAt: string
        }
        Update: {
          createdAt?: string
          customerId?: string
          deletedAt?: string | null
          id?: string
          isDeleted?: boolean
          orderId?: string
          reason?: string
          status?: Database["public"]["Enums"]["ReturnStatus"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Return_customerId_fkey"
            columns: ["customerId"]
            isOneToOne: false
            referencedRelation: "Customer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Return_orderId_fkey"
            columns: ["orderId"]
            isOneToOne: false
            referencedRelation: "Order"
            referencedColumns: ["id"]
          }
        ]
      }
      ReturnItem: {
        Row: {
          createdAt: string
          deletedAt: string | null
          id: string
          isDeleted: boolean
          orderItemId: string
          quantity: number
          returnId: string
          updatedAt: string
          variantId: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          id: string
          isDeleted?: boolean
          orderItemId: string
          quantity: number
          returnId: string
          updatedAt: string
          variantId: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          id?: string
          isDeleted?: boolean
          orderItemId?: string
          quantity?: number
          returnId?: string
          updatedAt?: string
          variantId?: string
        }
        Relationships: [
          {
            foreignKeyName: "ReturnItem_orderItemId_fkey"
            columns: ["orderItemId"]
            isOneToOne: false
            referencedRelation: "OrderItem"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ReturnItem_returnId_fkey"
            columns: ["returnId"]
            isOneToOne: false
            referencedRelation: "Return"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ReturnItem_variantId_fkey"
            columns: ["variantId"]
            isOneToOne: false
            referencedRelation: "Variant"
            referencedColumns: ["id"]
          }
        ]
      }
      User: {
        Row: {
          createdAt: string
          deletedAt: string | null
          email: string
          firstName: string
          franchiseId: string | null
          id: string
          isDeleted: boolean
          lastName: string
          password: string
          phone: string | null
          role: Database["public"]["Enums"]["UserRole"]
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          email: string
          firstName: string
          franchiseId?: string | null
          id: string
          isDeleted?: boolean
          lastName: string
          password: string
          phone?: string | null
          role?: Database["public"]["Enums"]["UserRole"]
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          email?: string
          firstName?: string
          franchiseId?: string | null
          id?: string
          isDeleted?: boolean
          lastName?: string
          password?: string
          phone?: string | null
          role?: Database["public"]["Enums"]["UserRole"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "User_franchiseId_fkey"
            columns: ["franchiseId"]
            isOneToOne: false
            referencedRelation: "Franchise"
            referencedColumns: ["id"]
          }
        ]
      }
      Variant: {
        Row: {
          createdAt: string
          deletedAt: string | null
          franchiseId: string
          id: string
          imageUrl: string
          isDeleted: boolean
          name: string
          optionId: string
          productId: string | null
          supplementPrice: number
          updatedAt: string
        }
        Insert: {
          createdAt?: string
          deletedAt?: string | null
          franchiseId: string
          id: string
          imageUrl: string
          isDeleted?: boolean
          name: string
          optionId: string
          productId?: string | null
          supplementPrice: number
          updatedAt: string
        }
        Update: {
          createdAt?: string
          deletedAt?: string | null
          franchiseId?: string
          id?: string
          imageUrl?: string
          isDeleted?: boolean
          name?: string
          optionId?: string
          productId?: string | null
          supplementPrice?: number
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Variant_productId_fkey"
            columns: ["productId"]
            isOneToOne: false
            referencedRelation: "Product"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      AuditAction: "CREATE" | "UPDATE" | "DELETE"
      AuditTable:
        | "Franchisor"
        | "FranchisorContact"
        | "Franchise"
        | "User"
        | "ProductCategory"
        | "Product"
        | "ProductPricing"
        | "Option"
        | "Variant"
        | "Customer"
        | "Address"
        | "Cart"
        | "CartItem"
        | "CartItemVariants"
        | "Order"
        | "OrderItem"
        | "OrderItemVariant"
        | "Return"
        | "ReturnItem"
      OrderMode: "ON_SITE" | "TAKE_AWAY" | "DELIVERY"
      OrderStatus: "VALID" | "IN_PROGRESS" | "SHIPPING_PROGRESS" | "DELIVERED"
      PromotionType: "RATE" | "AMOUNT" | "SPECIAL"
      ReturnStatus: "REQUESTED" | "APPROVED" | "REJECTED" | "PROCESSED"
      UserRole: "MASTER" | "ADMIN" | "USER" | "DELIVERY_MAN"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
