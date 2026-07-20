# Get a lightweight python image to create our environment
FROM python:3.14-slim

#Prevent python from creating byte code files
ENV PYTHONDONTWRITEBYTECODE=1
#Make logs appear immediately instead of being helf in an output buffer.
ENV PYTHONUNBUFFERED=1

#Create a non-root user
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

#Create our working directory
WORKDIR /app

#Copy our requirements document containing our major dependencies into the image
COPY requirements.txt .

#Install dependencies from requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

#Copy the entire project folder into the image
COPY . .

#Navigate to the folder containing manage.py
WORKDIR /app/notastudiosapi

#Collect static files like .CSS
RUN DJANGO_BUILD=true python manage.py collectstatic --noinput

#Expose the port
EXPOSE 8000

# Set the current user to the non-root user
USER appuser

#Run the program
CMD ["sh", "-c", "gunicorn notastudiosapi.wsgi:application --bind 0.0.0.0:${PORT:-8000} --no-control-socket"]