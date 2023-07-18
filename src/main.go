package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"github.com/joho/godotenv"
	"gopkg.in/gomail.v2"
)

type ContactForm struct {
	Name    string `form:"name" validate:"required"`
	Email   string `form:"email" validate:"required,email"`
	Message string `form:"message" validate:"required"`
}

func main() {
	// Load environment variables
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
	}

	r := gin.Default()
	r.Use(CORSMiddleware())

	r.POST("/send-email", func(c *gin.Context) {
		var form ContactForm
		if err := c.ShouldBind(&form); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		validate := validator.New()
		if err := validate.Struct(form); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		sendEmail(form)

		c.JSON(http.StatusOK, gin.H{"message": "Email sent successfully!"})
	})

	r.Run() // Use the default port 8080
}

func sendEmail(form ContactForm) {
	host := os.Getenv("SMTP_HOST")
	username := os.Getenv("SMTP_USERNAME")
	password := os.Getenv("SMTP_PASSWORD")

	m := gomail.NewMessage()
	m.SetHeader("From", username)
	m.SetHeader("To", "sylviamullinsdev@gmail.com")
	m.SetBody("text/html", fmt.Sprintf("<b>Name:</b> %s<br><b>Email:</b> %s<br><b>Message:</b> %s", form.Name, form.Email, form.Message))

	d := gomail.NewDialer(host, 587, username, password)

	if err := d.DialAndSend(m); err != nil {
		fmt.Println("Functionality coming soon", err)
	}
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(http.StatusNoContent)
			return
		}

		c.Next()
	}
}
